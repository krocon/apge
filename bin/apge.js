#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const apge = require('../lib');
const version = require('../lib/version.js');
const help = require('../lib/help.js');

// Displays the text in the console
// help.help();
// apge.generate('apge generate');

program
  // .arguments('<file>')
  .option('-v, --version', 'Prints the version number of apge', 'db')
  .option('-p, --prefix <prefix>', 'The app prefix (default: db)', 'db-demo')
  .option('-a, --app <appname>', 'The app name (default: db-demo)')
  .action(() => {
    // console.log('user: %s pass: %s file: %s', program.username, program.password, file);
    if (program.version) {
      version.version();
    } else {
      console.info(chalk.bold.cyan('TODO') + ' hier gehts weiter.');

      let prefix = program.prefix;
      let appname = program.appname
      console.info('Generating ' + chalk.yellow(appname) + ' ...');
      console.info(chalk.bold.cyan('TODO') + ' Not implemented yet.');
    }
    process.exit(1);
  })
  .parse(process.argv);
