const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');

const todos = [
  'npm@latest',
  '@angular/cli@latest',
  'apge'
]
const barOpts = {
  width: todos.length * 6,
  total: todos.length,
  clear: true
};
const bar = new ProgressBar(' Updating [:bar] :percent :etas :text', barOpts);

const execAsync = async idx => new Promise((resolve, rejected) => {
  const what = todos[idx];
  bar.tick((idx + 1), {text: 'Updating ' + chalk.bold.blue(what) + '...'});
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

  bar.tick(0, {text: 'Updating...'});
  await execAsync(0);
  await execAsync(1);
  await execAsync(2);
  bar.tick(3, {text: ''});

  console.info(chalk.bold('Updating done.'));
}

exports.update = update;
