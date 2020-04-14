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

const fix = async what => {
  if (what === 'nav') {
    await fs.writeFile(
      `./${app}/src/app/app.component.html`,
      `<${prefix}-${cp}-nav><router-outlet></router-outlet></${prefix}-${cp}-nav>`);

    const options = {
      files: `./${app}/src/app/${cp}-nav/${cp}-nav.component.html`,
      from: /<!-- Add Content Here -->/g,
      to: `<router-outlet></router-outlet>`,
    };

    await replace.sync(options);
  }
};

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
  console.info('\n' + chalk.bold('A P G E') + '\n');
  console.info('apge version    :', chalk.bold.green(pkg.version));
  console.info('app             :', chalk.bold.blue(app));
  console.info('prefix          :', chalk.bold.blue(prefix));
  console.info('componentprefix :', chalk.bold.blue(cp));
  console.info('\n' + chalk.bold('Generating...'));
  console.info('Steps:');
  for (let i = 0; i < cmds.length; i++) {
    console.info(chalk.bold.red((i + 1)) + ') ' + cmds[i]);
  }
  console.info('');
};

const generate = async (options) => {
  updateVariables(options);

  const cmds = [
    `ng new ${app} --routing=true --style=scss --routing=true --interactive=false --prefix=${prefix}`,
    `cd ${app}`,
    `ng add @angular/material --defaults=true`,
    `ng generate @angular/material:material-nav --name=${cp}-nav`,
    `fix nav`,
    `ng generate module ${cp}-welcome`,
    `ng generate component ${cp}-welcome --module ${cp}-welcome --skipTests=true --changeDetection=OnPush`,
    `ng generate module ${cp}-page-not-found`,
    `ng generate component ${cp}-page-not-found --module ${cp}-page-not-found --skipTests=true --changeDetection=OnPush`,
    `copy templates`,
    `fix templates`,
    `rename templates`,
  ];

  printSteps(cmds);

  const barOpts = {
    width: cmds.length * 3,
    total: cmds.length,
    clear: true
  };
  const bar = new ProgressBar(' Generating [:bar] :percent', barOpts);

  // execute step by step:
  for (let i = 0; i < cmds.length; i++) {
    const cmd = cmds[i];
    bar.tick(i);

    if (cmd === 'copy templates') {
      await fse.copy(__dirname + '/templates/app/', './' + app + '/src/app/');

    } else if (cmd === 'fix templates') {
      for (const key in replacements) {
        await replace.sync({
          files: './' + app + '/src/app/**/*.*',
          from: new RegExp(key, 'g'),
          to: replacements[key],
        });
      }

    } else if (cmd === 'rename templates') {
      await renameFiles('./' + app + '/src/')

    } else if (cmd.indexOf('cd ') === 0) {
      cwd = './' + app;

    } else if (cmd.indexOf('fix ') === 0) {
      await fix(cmd.split(' ')[1]);

    } else {
      await execAsync(cmd);
    }
  }
  bar.tick(3, {text: ''});

  console.info(chalk.bold('Generating done.'));
  // exec('call cd ./' + app);
  // exec('call dir');
};

exports.generate = generate;

