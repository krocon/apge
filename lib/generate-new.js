const chalk = require('chalk');
const fse = require('fs-extra');
const ProgressBar = require('progress');
const {fixFiles} = require("./fix-files");
const {execAsync} = require("./exec-async");
const {printInfo} = require("./print-info");
const {renameFiles} = require("./rename-files");

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

const generate = async (options) => {
  let cwd = './';
  updateVariables(options);

  const cmds = [
    'pre check',
    `ng new ${data.app} --routing=true --style=scss --routing=true --interactive=false --prefix=${data.prefix}`,
    `cd ${data.app}`,
    `ng add @angular/material --defaults=true`,
    `ng add @angular/pwa --project ${data.app}`,
    'npm i gts  --save-dev',
    'npm i @angular/flex-layout -s',
    'npm i replace-in-file --save-dev',
    `copy templates`,
    `copy src`,
    `copy root`,
    `fix files`,
    `rename files`
  ];

  printInfo(cmds, data);

  const barOpts = {
    width: cmds.length + 1,
    total: cmds.length + 1,
    clear: true,
    cmd: 'init'
  };
  const bar = new ProgressBar(' Generating... [:bar] (:percent) Step: :cmd', barOpts);

  // execute step by step:
  for (let i = 0; i < cmds.length; i++) {
    const cmd = cmds[i];
    bar.tick(i, {cmd: cmd});
    await sleep(500);

    if (cmd === 'pre check') {
      // TODO check that target folder is empty

    } else if (cmd === 'copy templates') {
      await fse.copy(__dirname + '/templates/app/', './' + data.app + '/src/app/');

    } else if (cmd === 'copy src') {
      await fse.copy(__dirname + '/templates/src/', './' + data.app + '/src/');

    } else if (cmd === 'copy root') {
      await fse.copy(__dirname + '/templates/root/', './' + data.app + '/');

    } else if (cmd === 'fix files') {
      await fixFiles('./' + data.app + '/src/**/*.*', replacements);

    } else if (cmd === 'rename files') {
      await renameFiles('./' + data.app + '/src/', replacements);

    } else if (cmd.indexOf('cd ') === 0) {
      cwd = './' + data.app;

    } else {
      await execAsync(cmd, cwd);
    }
  } // for

  // bar.tick(cmds.length + 1, {cmd: 'finished'});

  console.info(chalk.bold('Generating done.'));
  console.info('Type:');
  console.info('  cd ' + data.app);
  console.info('  ng serve');
};

exports.generate = generate;

