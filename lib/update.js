const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');

const todos = [
  'npm@latest',
  '@angular/cli@latest',
  'apge'
]

const execAsync = async idx => new Promise((resolve, rejected) => {
  const what = todos[idx];
  exec('npm install -g ' + what, (err, stdout, stderr) => {
    if (err) {
      rejected(err);

    } else {
      resolve()
    }
  });
}).catch(console.error);


const update = async () => {
  console.info(chalk.bold('Updating...'));

  const barOpts = {
    width: todos.length * 6,
    total: todos.length,
    clear: true
  };
  const bar = new ProgressBar(' Updating [:bar] :percent :etas :text', barOpts);

  bar.tick(0, {text: 'Updating ' + (todos[0]) + '...'});
  await execAsync(0);

  bar.tick(1, {text: 'Updating ' + (todos[1]) + '...'});
  await execAsync(1);

  bar.tick(2, {text: 'Updating ' + chalk.bold.blue(todos[2]) + '...'});
  await execAsync(2);

  bar.tick(3, {text: ''});

  console.info(chalk.bold('Updating done.'));
}

exports.update = update;
