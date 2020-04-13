const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');
const {replace} = require('replace-in-file');
const fs = require('fs');

let prefix = 'app';
let app = 'demo';
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
    fs.writeFileSync(`./${app}/src/app.component.html`, `<app-db-nav><router-outlet></router-outlet></app-db-nav>`);

    const options = {
      files: `./${app}/src/app/${prefix}-nav/${prefix}-nav.component.html`,
      from: /<!-- Add Content Here -->/g,
      to: `<app-${prefix}-nav><router-outlet></router-outlet></app-${prefix}-nav>`,
    };
    try {
      await replace(options)
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
};


const generate = async (options) => {
  console.info(chalk.bold('Generating...'));

  prefix = options.prefix;
  app = options.app;

  const cmds = [
    `ng new ${app} --routing=true --style=scss --routing=true --interactive=false --prefix=${prefix}`,
    `cd ${app}`,
    `ng add @angular/material --defaults=true`,
    `ng generate @angular/material:material-nav --name=${prefix}-nav`,
    `fix nav`,
    `ng generate module ${prefix}-welcome`,
    `ng generate component ${prefix}-welcome --module ${prefix}-welcome --skipTests=true --changeDetection=OnPush`,
    `ng generate module ${prefix}-page-not-found`,
    `ng generate component ${prefix}-page-not-found --module ${prefix}-page-not-found --skipTests=true --changeDetection=OnPush`,
  ];

  console.info('app   : ', chalk.bold.blue(app));
  console.info('prefix: ', chalk.bold.blue(prefix));

  for (let i = 0; i < cmds.length; i++) {
    console.info(chalk.bold.red((i + 1)) + ') ' + cmds[i]);
  }
  console.info('');

  const barOpts = {
    width: cmds.length * 3,
    total: cmds.length,
    clear: true
  };
  const bar = new ProgressBar(' Generating [:bar] :percent', barOpts);
  for (let i = 0; i < cmds.length; i++) {
    const cmd = cmds[i];
    bar.tick(i);
    if (cmd.indexOf('cd ') === 0) {
      cwd = './' + app;
    } else if (cmd.indexOf('fix ') === 0) {
      await fix(cmd.split(' ')[1]);

    } else {
      await execAsync(cmd);
    }
  }
  bar.tick(3, {text: ''});

  console.info(chalk.bold('Generating done.'));
  exec('cd ' + cwd);
  exec('dir');
};

exports.generate = generate;

