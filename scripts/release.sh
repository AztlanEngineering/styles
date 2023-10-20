#!/bin/bash
 
VERSION=${1:-'minor'}
 
# https://github.com/lerna/lerna/tree/main/libs/commands/version#readme
npm run lerna -- version $VERSION --yes -m "auto-publish %s"
