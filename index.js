const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
var shell = require('shelljs');
const proces = require('process');
shell.exec("node ./node_modules/.bin/cucumber.js features/ -r steps/ --backstop="+argv.backstop+" --envTest="+argv.envTest);