#!/usr/bin/env node

const {Command} = require('commander');
const apge = require('../lib');
const update = require('../lib/update.js');
const pkg = require('../package.json');

const program = new Command();

program
  .name('apge')
  .usage('[options]')
  .version(pkg.version, '-v, --version', 'output the current version')

  .option('-u, --update', 'Update of npm, angular cli and apge')
  .option('-p, --prefix <prefix>', 'The app prefix (default: db)', 'db')
  .option('-a, --app <app>', 'The app name (default: db-demo)', 'db-demo')

  .action(async () => {
      if (program.update) {
        // user entered:  apge --update
        await update.update();

      } else {
        await apge.generate({
          app: program.app,
          prefix: program.prefix
        });
      }
    }
  )
  .parse(process.argv);
