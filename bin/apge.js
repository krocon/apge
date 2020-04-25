#!/usr/bin/env node

const {Command} = require('commander');
const fs = require('fs-extra');
const apge = require('../lib/cmd-generate-new.js');
const update = require('../lib/cmd-update.js');
const pkg = require('../package.json');
const chalk = require('chalk');
const {generateStoreService} = require("../lib/cmd-generate-storeservice");
const {generateRestService} = require("../lib/cmd-generate-restservice");
const {printFiglet} = require("../lib/print-figlet");

const program = new Command();

printFiglet()

program
  .name('apge')
  .usage('<cmd> [options]')
  .version(pkg.version, '-v, --version', 'Output the current version');

program
  .on('--help', () => {
  });

program
  .command('update')
  .description('Update of npm, angular cli and apge')
  .action(async () => {
    await update.update();
  });

program
  .command('new')
  .description('Generate a new angular project')
  .option('-f, --force', 'No confirm dialog / no prompts.', false)
  .option('-a, --app <app>', 'The app name', 'demo')
  .option('-l, --logo <logo>', 'A predefined logo [dummy, deutschebank, deutschebahn, lufthansa]', 'dummy')
  .option('-p, --prefix <prefix>', 'The app prefix', 'app')
  .option('-cp, --componentprefix <componentprefix>', 'The component prefix', 'db')
  .action(async (options) => {
      const opts = {
        force: options.force,
        app: options.app,
        prefix: options.prefix,
        componentprefix: options.componentprefix,
        logo: options.logo
      };
      await apge.generateNewProject(opts);
    }
  )
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ apge new -a demo -p app -cp xy');
    console.log('  $ apge new -a clicknride -p app -cp cr -f');
  });


program
  .command('generate')
  .usage('<schematic> <name> [options]')
  .description('Generate a new schematic [restservice, storeservice]', 'storeservice')
  .option('-f, --force', 'No confirm dialog / no prompts.', false)
  .action(async (p1, p2) => {
      let jsonObject;
      try {
        jsonObject = fs.readJsonSync('apge.json');
      } catch (e) {
        console.error(chalk.bold.red('The generate command requires to be run in an Angular project, but a project definition (apge.json) could not be found.'));
        console.error(e);
        process.exit(-1);
      }

      if (p1 && p2 && p2.length > 1) {
        jsonObject.force = p1.force;
        const schematic = p2[0];
        const name = p2[1];

        if (!name) {
          console.error(chalk.bold.red('Name is missing.'));
          console.error(chalk.bold.red('Try:  apge generate --help'));

        } else if (schematic === 'storeservice') {
          await generateStoreService(name, jsonObject);

        } else if (schematic === 'restservice') {
          await generateRestService(name, jsonObject);

        } else {
          console.error(chalk.bold.red('The generate command requires a type [restservice, storeservice] and a name.'));
          console.error(chalk.bold.red('Try:  apge generate --help'));
        }

      } else {
        console.error(chalk.bold.red('Try:  apge generate --help'));
      }
    }
  )
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ apge generate restservice flight');
    console.log('  $ apge generate storeservice configuration');
  });

program.parse(process.argv);
