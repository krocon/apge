#!/usr/bin/env node

const {Command} = require('commander');
const chalk = require('chalk');
const apge = require('../lib');
const update = require('../lib/update.js');
const pkg = require('../package.json');

const program = new Command();

program
  .name('apge')
  .usage('[options] generate')
  .version(pkg.version, '-v, --version', 'output the current version')

  .arguments('<cmd>')

  .option('-u, --update', 'Update of npm, angular cli and apge')
  .option('-p, --prefix <prefix>', 'The app prefix (default: db)', 'db')
  .option('-a, --app <appname>', 'The app name (default: db-demo)', 'db-demo')

  .action(async (cmd) => {
      if (program.update) {
        // user entered:  apge --update
        await update.update();
      }

      if (cmd === 'generate') {
        let prefix = program.prefix;
        let appname = program.appname;
        await apge.generate({
          appname: appname,
          prefix: prefix
        });

      } else {
        program.help();
      }
    }
  )
  .parse(process.argv);
