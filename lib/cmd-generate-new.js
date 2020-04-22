const chalk = require('chalk');
const fse = require('fs-extra');
const prompts = require('prompts');
const ProgressBar = require('progress');

const {fixFiles} = require("./fix-files");
const {execAsync} = require("./exec-async");
const {printInfo} = require("./print-info");
const {renameFiles} = require("./rename-files");
const {checkTargetFolder} = require("./check-target-folder");
const {changePackageJsonScripts} = require("./tweak-package-json");


const data = {
  app: 'demo',
  capitalizedApp: 'Demo',
  prefix: 'app',
  capitalizedPrefix: 'App',
  cp: 'db',
  capitalizedCp: 'Db'
};

let replacements = {
  '__app__': data.app,
  '__capitalizedApp__': data.capitalizedApp,
  '__prefix__': data.prefix,
  '__capitalizedPrefix__': data.capitalizedPrefix,
  '__cp__': data.cp,
  '__capitalizedCp__': data.capitalizedCp,
};


const callExit = () => {
  console.warn(chalk.bold.red('\n\nTarget folder already exists: ', './' + data.app));
  console.warn('Choose another target folder ('
    + chalk.bold.green('apge -p ' + data.app + '2')
    + ') or delete target folder first ('
    + chalk.bold.green('rmdir ' + data.app + ' /s /q')
    + ' or '
    + chalk.bold.green('rm -rf ' + data.app + '/') + ').');
  console.warn(chalk.bold.red('Abort.'));
  process.exit(-1);
};


const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const updateVariables = (options) => {
  data.app = options.app;
  data.capitalizedApp = capitalize(data.app);
  data.prefix = options.prefix;
  data.capitalizedPrefix = capitalize(data.prefix);
  data.cp = options.componentprefix;
  data.capitalizedCp = capitalize(data.cp);

  replacements = {
    '__app__': data.app,
    '__capitalizedApp__': data.capitalizedApp,
    '__prefix__': data.prefix,
    '__capitalizedPrefix__': data.capitalizedPrefix,
    '__cp__': data.cp,
    '__capitalizedCp__': data.capitalizedCp,
  }
}

async function sleep(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

const printDone = () => {
  console.info(`
  
 ${chalk.bold('Generating done.')}
 Type:
   cd ${data.app}
   ng serve
`);
};

const generateNewProject = async (options) => {
  let cwd = './';
  updateVariables(options);

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
          callExit();
          return; // exit program
        }

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
        printDone();

      } else {
        await execAsync(cmd, cwd);
      }
    } // for

  } // if

};

exports.generateNewProject = generateNewProject;

