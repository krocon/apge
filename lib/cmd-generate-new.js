const chalk = require('chalk');
const fse = require('fs-extra');
const prompts = require('prompts');
const ProgressBar = require('progress');
const {createReplacements} = require("./create-replacements");
const {updateData} = require("./update-data");

const {changeLogo} = require("./change-logo");
const {fixFiles} = require("./fix-files");
const {execAsync} = require("./exec-async");
const {printInfo} = require("./print-info");
const {renameFiles} = require("./rename-files");
const {checkTargetFolder} = require("./check-target-folder");
const {changePackageJsonScripts} = require("./tweak-package-json");


const data = {
  app: 'demo', // Basepath and "name" in package.json
  appLabel: 'DemoApp', // Label
  cp: 'db' // Company Prefix
};


const callExit = (d) => {
  console.warn(chalk.bold.red('\n\nTarget folder already exists: ', './' + d.app));
  console.warn('Choose another target folder ('
    + chalk.bold.green('apge -p ' + d.app + '2')
    + ') or delete target folder first ('
    + chalk.bold.green('rmdir ' + d.app + ' /s /q')
    + ' or '
    + chalk.bold.green('rm -rf ' + d.app + '/') + ').');
  console.warn(chalk.bold.red('Abort.'));
  process.exit(-1);
};

async function sleep(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}


const printDone = () => {
  console.info(`
  
 ${chalk.bold('Project successfully generated.')}
 Type:
   cd ${data.app}
   ng serve

.`);
};

const generateNewProject = async (options) => {
  let cwd = './';
  updateData(options, data);
  const replacements = createReplacements(data);

  const cmds = [
    'pre check',
    `ng new ${data.app} --routing=true --style=scss --routing=true --interactive=false --prefix=${data.prefix}`,
    `cd ${data.app}`,
    `ng add @angular/material --defaults=true`,
    `ng add @angular/pwa --project ${data.app}`,
    'npm i @angular/flex-layout -s',
    'npm i replace-in-file --save-dev',
    'npm i git-last-commit --save-dev',
    `copy templates`,
    `copy src`,
    `copy root`,
    'extend package.json',
    'change logo',
    `fix files`,
    `rename files`,
    `npm install`,
    'done'
  ];

  printInfo(cmds, data);

  let confirmed = options.force;
  if (!confirmed) {
    const res = await prompts({
      type: 'confirm',
      name: 'value',
      message: 'Can you confirm?',
      initial: true
    });
    confirmed = res.value;
  }

  if (confirmed) {
    console.info('');

    const barOpts = {
      width: cmds.length,
      total: cmds.length,
      clear: true,
      cmd: 'init',
      complete: '\u2588',
      incomplete: '.'
    };
    const step = chalk.bold.green('Step');
    const bar = new ProgressBar(' Generating... [:bar] (:percent) ' + step + ': :cmd', barOpts);


    // execute step by step:
    for (let i = 0; i < cmds.length; i++) {
      const cmd = cmds[i];
      bar.tick(1, {cmd: cmd});
      await sleep(500);

      if (cmd === 'pre check') {
        const exists = await checkTargetFolder('./' + data.app);
        if (exists) {
          callExit(data);
          return; // exit program
        }

      } else if (cmd === 'change logo') {
        await changeLogo('./' + data.app + '/src/app/__cp__-logo/__cp__-logo.module.ts', data.logo);

      } else if (cmd === 'copy templates') {
        await fse.copy(__dirname + '/../templates/app/', './' + data.app + '/src/app/');

      } else if (cmd === 'copy src') {
        await fse.copy(__dirname + '/../templates/src/', './' + data.app + '/src/');

      } else if (cmd === 'copy root') {
        await fse.copy(__dirname + '/../templates/root/', './' + data.app + '/');

      } else if (cmd === 'fix files') {
        await fixFiles('./' + data.app + '/src/**/*.*', replacements);
        await fixFiles('./' + data.app + '/package.json', replacements);

      } else if (cmd === 'extend package.json') {
        changePackageJsonScripts(
          './' + data.app + '/package.json',
          {
            "build": "npm run _update-build-version & ng build --deleteOutputPath=true --prod --build-optimizer --serviceWorker=true --aot=true  --base-href /" + data.app + "/",
            "lint-fix": "ng lint --fix=true",
            "_update-build-version": "node replace.build.version.js"
          }
        );

      } else if (cmd === 'rename files') {
        await renameFiles('./' + data.app + '/src/', replacements);

      } else if (cmd.indexOf('cd ') === 0) {
        cwd = './' + data.app;

      } else if (cmd.indexOf('done') === 0) {
        await fse.writeJsonSync('./' + data.app + '/apge.json', options, {spaces: 2});
        printDone();

      } else {
        await execAsync(cmd, cwd);
      }
    } // for

  } // if

};

exports.generateNewProject = generateNewProject;

