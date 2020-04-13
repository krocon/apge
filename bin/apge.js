#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const apge = require('../lib');
const update = require('../lib/update.js');
const version = require('../lib/version.js');
const help = require('../lib/help.js');


program
  // .arguments('<file>')
  .option('-v, --version', 'Prints the version number of apge')
  .option('-h, --help', 'Prints the version number of apge')
  .option('-u, --update', 'Update of npm, angular cli and apge')
  .option('-p, --prefix <prefix>', 'The app prefix (default: db)', 'db')
  .option('-a, --app <appname>', 'The app name (default: db-demo)', 'db-demo')
  .action(() => {
      // console.info(JSON.stringify(program, null, 4)); // TODO weg
      if (program.update) {
        // user entered:  apge --update
        update();

      } else if (program.version) {
        // user entered:  apge --version
        version();

      } else if (program.help) {
        // user entered:  apge --help
        help.help();

      } else {

        let prefix = program.prefix;
        let appname = program.appname;
        apge.generate({
          appname: appname,
          prefix: prefix
        });
      }
      process.exit(1);
    }
  )
  .parse(process.argv);
