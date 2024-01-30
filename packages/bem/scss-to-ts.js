#!/usr/bin/env node
import { promises as fs } from 'fs';
import sassVars from 'get-sass-vars';

if (process.argv.length < 4) {
  console.error('Usage: node scss-to-ts.js <input-scss-file> <output-ts-file>');
  process.exit(1);
}

function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

(async () => {
	const css = await fs.readFile(inputFilePath, 'utf-8');
	const json = await sassVars(css);
	//console.log(json);
  
  await fs.writeFile(outputFilePath, 'export default {\n');

  for (const key in json) {
    if (key.startsWith('$_')) {
      continue;
    }

    if (key.startsWith('$')) {
      const value = JSON.stringify(json[key]);
      const camelKey = kebabToCamel(key.substring(1));
      await fs.appendFile(outputFilePath, `  ${camelKey}: ${value},\n`);
    }
  }

  await fs.appendFile(outputFilePath, '};\n');

})();
