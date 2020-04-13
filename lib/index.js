const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');

let cwd = './';

const execAsync = async cmd => new Promise((resolve, rejected) => {
  console.info('cwd: ' + cwd + ',   cmd:', cmd);
  exec(cmd, {cwd: cwd}, (err, stdout, stderr) => {
    if (err) {
      rejected(err);
    } else {
      resolve(cmd);
    }
  });
}).catch(console.error);


const generate = async (options) => {
  console.info(chalk.bold('Generating...'));

  const prefix = options.prefix;
  const app = options.app.indexOf('-') === -1 ? (prefix + '-' + options.app) : options.app;

  const cmds = [
    `ng new ${app} --routing=true --style=scss --routing=true --interactive=false --prefix=${prefix}`,
    `cd ${app}`,
    `ng add @angular/material --defaults=true`,
    `ng generate @angular/material:material-nav --name=${prefix}-nav`,
    `ng generate module ${prefix}-welcome`,
    `ng generate component ${prefix}-welcome --module ${prefix}-welcome --skipTests=true --changeDetection=OnPush`,
    `ng generate component ${prefix}-page-not-found --flat=true --inlineStyle=true --inlineTemplate=true --skipTests=true --`,
  ];

  console.info('app   : ', chalk.bold.blue(app));
  console.info('prefix: ', chalk.bold.blue(prefix));

  for (let i = 0; i < cmds.length; i++) {
    console.info(chalk.bold.red((i + 1)) + ') ' + cmds[i]);
  }

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
    } else {
      await execAsync(cmd);
    }
  }
  bar.tick(3, {text: ''});

  console.info(chalk.bold('Generating done.'));
};

exports.generate = generate;

