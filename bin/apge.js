#!/usr/bin/env node

const {Command} = require('commander');
const apge = require('../lib/cmd-generate-new.js');
const update = require('../lib/cmd-update.js');
const pkg = require('../package.json');

const program = new Command();

console.info(`
  ___                    _             ______          _           _     _____                           _             
 / _ \\                  | |            | ___ \\        (_)         | |   |  __ \\                         | |            
/ /_\\ \\_ __   __ _ _   _| | __ _ _ __  | |_/ / __ ___  _  ___  ___| |_  | |  \\/ ___ _ __   ___ _ __ __ _| |_ ___  _ __ 
|  _  | '_ \\ / _\` | | | | |/ _\` | '__| |  __/ '__/ _ \\| |/ _ \\/ __| __| | | __ / _ \\ '_ \\ / _ \\ '__/ _\` | __/ _ \\| '__|
| | | | | | | (_| | |_| | | (_| | |    | |  | | | (_) | |  __/ (__| |_  | |_\\ \\  __/ | | |  __/ | | (_| | || (_) | |   
\\_| |_/_| |_|\\__, |\\__,_|_|\\__,_|_|    \\_|  |_|  \\___/| |\\___|\\___|\\__|  \\____/\\___|_| |_|\\___|_|  \\__,_|\\__\\___/|_|   
              __/ |                                  _/ |                                                              
             |___/                                  |__/                                                               
  
  `);

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
  .option('-f, --force <force>', 'No confirm dialog / no prompts.', false)
  .option('-a, --app <app>', 'The app name (default: demo)', 'demo')
  .option('-p, --prefix <prefix>', 'The app prefix (default: app)', 'app')
  .option('-cp, --componentprefix <componentprefix>', 'The component prefix (default: db)', 'db')
  .action(async (options) => {
      const opts = {
        force: options.force,
        app: options.app,
        prefix: options.prefix,
        componentprefix: options.componentprefix,
      };
      await apge.generateNewProject(opts);
    }
  )
  .on('--help', function () {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ apge new -a demo -p app -cp xy');
    console.log('  $ apge new -a clicknride -p app -cp cr -f');
  });

program.parse(process.argv);
