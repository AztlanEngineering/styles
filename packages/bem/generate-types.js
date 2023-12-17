#!/usr/bin/env node
const fs = require('fs');

const moduleName = '@aztlan/bem';
const scssFilePath = 'exports.module.scss'; // Adjust this path accordingly
const outputFilePath = 'exports.module.scss.d.ts'; // Adjust the output path

const scssContent = fs.readFileSync(scssFilePath, 'utf8');
const lines = scssContent.split('\n');

let inExportBlock = false;
const typeDeclarations = [];

lines.forEach((line, index) => {
  if (line.includes(':export')) {
    inExportBlock = true;
  } else if (inExportBlock) {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('//') && trimmedLine.includes(':')) {
      const [variable,] = trimmedLine.split(':');
      const variableName = variable.trim();
      typeDeclarations.push(`  export const ${variableName}: string;`);
    }
  }
});

const tsDeclaration = `declare module '${moduleName}' {\n${typeDeclarations.join('\n')}\n}\n`;

fs.writeFileSync(outputFilePath, tsDeclaration, 'utf8');
