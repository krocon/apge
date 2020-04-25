#!/usr/bin/env node

const {Command} = require('commander');
const apge = require('../lib/cmd-generate-new.js');
const update = require('../lib/cmd-update.js');
const pkg = require('../package.json');
const chalk = require('chalk');
const {generateStoreservice} = require("../lib/cmd-generate-storeservice");
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
    if (p1 && p2) {
      const force = p1.force === 'true' || p1.force === '1';
      const schematic = p2[0];
      const name = p2[1];

      console.info('force', JSON.stringify(force));
      console.info('schematic', JSON.stringify(schematic));
      console.info('name', JSON.stringify(name));

      if (!name) {
        console.error(chalk.bold.red('Name is missing.'));
        console.error(chalk.bold.red('Try:  apge generate --help'));

      } else if (schematic === 'storeservice') {
        await generateStoreservice(name);

      } else if (schematic === 'restservice') {
        // todo generateStoreservice(name);
        console.info('Not implemented yet');

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
