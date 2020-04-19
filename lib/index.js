const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');
const replace = require('replace-in-file');
const fs = require('fs').promises;
const fse = require('fs-extra');
const pkg = require('../package.json');
const {join} = require('path');

let app = 'demo';
let capitalizedApp = 'Demo';
let prefix = 'app';
let capitalizedPrefix = 'App'
let cp = 'db';
let capitalizedCp = 'Db'

let replacements = {
  '__app__': app,
  '__capitalizedApp__': capitalizedApp,
  '__prefix__': prefix,
  '__capitalizedPrefix__': capitalizedPrefix,
  '__cp__': cp,
  '__capitalizedCp__': capitalizedCp,
};

let cwd = './';

const execAsync = async cmd => new Promise((resolve, rejected) => {
  exec(cmd, {cwd: cwd}, (err, stdout, stderr) => {
    if (err) {
      rejected(err);
    } else {
      resolve(cmd);
    }
  });
}).catch(console.error);

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


const hasKeyInName = (name) => {
  for (const key in replacements) {
    if (name.indexOf(key) > -1) return key;
  }
  return null;
}

const replaceAllKeys = (name) => {
  for (const key in replacements) {
    name = name.replace(new RegExp(key, 'g'), replacements[key]);
  }
  return name;
}

const renameFiles = async (dir) => {
  const files = await fs.readdir(dir);

  let names = files.filter(file => hasKeyInName(file));
  for (const file of names) {
    const filePath = join(dir, file);
    const newFilePath = join(dir, replaceAllKeys(file));
    await fs.rename(filePath, newFilePath);
  }

  let potentialDirs = (await fs.readdir(dir)).filter(file => file.indexOf('.') === -1);
  for (let i = 0; i < potentialDirs.length; i++) {
    await renameFiles(join(dir, potentialDirs[i]));
  }
};

const updateVariables = (options) => {
  app = options.app;
  capitalizedApp = capitalize(app);
  prefix = options.prefix;
  capitalizedPrefix = capitalize(prefix);
  cp = options.componentprefix;
  capitalizedCp = capitalize(cp);

  replacements = {
    '__app__': app,
    '__capitalizedApp__': capitalizedApp,
    '__prefix__': prefix,
    '__capitalizedPrefix__': capitalizedPrefix,
    '__cp__': cp,
    '__capitalizedCp__': capitalizedCp,
  }
}

const printSteps = (cmds) => {
  console.info('\n' + chalk.bold('A P Ge') + '    '
    + chalk.bold.green('A') + 'ngular '
    + chalk.bold.green('P') + 'roject '
    + chalk.bold.green('Ge') + 'nerator   \n');
  console.info('apge version    :', chalk.bold.green(pkg.version));
  console.info('app             :', chalk.bold.blue(app));
  console.info('prefix          :', chalk.bold.blue(prefix));
  console.info('componentprefix :', chalk.bold.blue(cp));
  console.info('\n' + chalk.bold('Generating...'));
  console.info('Steps:');
  for (let i = 0; i < cmds.length; i++) {
    const nr = i + 1;
    console.info(chalk.bold.red((nr < 10 ? '  ' : ' ') + nr) + ') ' + cmds[i]);
  }
  console.info('');
};

const generate = async (options) => {
  updateVariables(options);

  const cmds = [
    'pre check',
    `ng new ${app} --routing=true --style=scss --routing=true --interactive=false --prefix=${prefix}`,
    `cd ${app}`,
    `ng add @angular/material --defaults=true`,
    `ng add @angular/pwa --project ${app}`,
    'npm i gts  --save-dev',
    'npm i @angular/flex-layout -s',
    'npm i replace-in-file --save-dev',
    `copy templates`,
    `copy src`,
    `copy root`,
    `fix files`,
    `rename files`
  ];

  printSteps(cmds);

  const barOpts = {
    width: cmds.length + 1,
    total: cmds.length + 1,
    clear: true,
    cmd: 'init'
  };
  const bar = new ProgressBar(' Generating [:bar] :percent :cmd', barOpts);

  // execute step by step:
  for (let i = 0; i < cmds.length; i++) {
    const cmd = cmds[i];
    bar.tick(i + 1, {cmd: cmd});

    if (cmd === 'pre check') {
      // TODO check that target folder is empty

    } else if (cmd === 'copy templates') {
      await fse.copy(__dirname + '/templates/app/', './' + app + '/src/app/');

    } else if (cmd === 'copy src') {
      await fse.copy(__dirname + '/templates/src/', './' + app + '/src/');

    } else if (cmd === 'copy root') {
      await fse.copy(__dirname + '/templates/root/', './' + app + '/');

    } else if (cmd === 'fix files') {
      for (const key in replacements) {
        await replace.sync({
          files: './' + app + '/src/**/*.*',
          from: new RegExp(key, 'g'),
          to: replacements[key],
        });
      }

    } else if (cmd === 'rename files') {
      await renameFiles('./' + app + '/src/')

    } else if (cmd.indexOf('cd ') === 0) {
      cwd = './' + app;

    } else {
      await execAsync(cmd);
    }
  } // for

  bar.tick(cmds.length + 1, {cmd: 'finished'});

  console.info(chalk.bold('Generating done.'));
  console.info('Type:');
  console.info('  cd ' + app);
  console.info('  ng serve');
};

exports.generate = generate;

