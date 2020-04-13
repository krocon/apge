#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const apge = require('../lib');
const update = require('../lib/update.js');
const version = require('../lib/version.js');
const help = require('../lib/help.js');


program
  // .arguments('<file>')
  .option('-v, --version', 'Prints the version number of apge', true)
  .option('-h, --help', 'Prints the version number of apge', true)
  .option('-u, --update', 'Update of npm, angular cli and apge', true)
  .option('-p, --prefix <prefix>', 'The app prefix (default: db)', 'db')
  .option('-a, --app <appname>', 'The app name (default: db-demo)')
  .action(() => {
      if (!program.update) {
        // user entered:  apge --update
        update();
        process.exit(1);
        return;
      }

      if (!program.version) {
        // user entered:  apge --version
        version();
        process.exit(1);
        return;
      }

      if (!program.help) {
        // user entered:  apge --help
        help.help();
        process.exit(1);
        return;
      }

      let prefix = program.prefix;
      let appname = program.appname;
      apge.generate({
        appname: appname,
        prefix: prefix
      })
    }
  )
  .parse(process.argv);
