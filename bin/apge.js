#!/usr/bin/env node

const {Command} = require('commander');
const chalk = require('chalk');
const apge = require('../lib');
const update = require('../lib/update.js');
const help = require('../lib/help.js');
const pkg = require('../package.json');

const program = new Command();

program.version(pkg.version, '-v, --version', 'output the current version')

program
  .option('-h, --help', 'Prints the version number of apge')
  .option('-u, --update', 'Update of npm, angular cli and apge')
  .option('-p, --prefix <prefix>', 'The app prefix (default: db)', 'db')
  .option('-a, --app <appname>', 'The app name (default: db-demo)', 'db-demo');

program
  .action(() => {
      // console.info(JSON.stringify(program, null, 4)); // TODO weg
      if (program.update) {
        // user entered:  apge --update
        update();

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
  );

program
  .parse(process.argv);
