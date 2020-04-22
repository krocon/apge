#!/usr/bin/env node

const {Command} = require('commander');
const apge = require('../lib/cmd-generate-new.js');
const update = require('../lib/cmd-update.js');
const pkg = require('../package.json');

const program = new Command();

program
  .name('apge')
  .usage('[options]')
  .version(pkg.version, '-v, --version', 'output the current version')

  .option('-u, --update', 'Update of npm, angular cli and apge')
  .option('-a, --app <app>', 'The app name (default: demo)', 'demo')
  .option('-p, --prefix <prefix>', 'The app prefix (default: app)', 'app')
  .option('-cp, --componentprefix <componentprefix>', 'The component prefix (default: db)', 'db')

  .action(async () => {
      if (program.update) {
        // user entered:  apge --update
        await update.update();

      } else {
        await apge.generate({
          app: program.app,
          prefix: program.prefix,
          componentprefix: program.componentprefix,
        });
      }
    }
  )
  .parse(process.argv);
