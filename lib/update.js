const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');

const todos = [
  'npm@latest',
  '@angular/cli@latest',
  'apge'
]

const execAsync = async what => new Promise((resolve, rejected) => {
  exec('npm install -g ' + what, (err, stdout, stderr) => {
    if (err) {
      console.error(chalk.bold.blue('Error while updating ' + what));
      rejected(err);

    } else {
      console.info('Updated ' + chalk.bold.blue(what) + ' successfully.');
      resolve()
    }
  });
}).catch(console.error);


const update = async () => {
  console.info(chalk.bold('Updating...'));

  const barOpts = {
    width: 18,
    total: 3,
    clear: true
  };
  const bar = new ProgressBar(' Updating [:bar] :percent :etas :text', barOpts);
  await execAsync(todos[0]);
  bar.tick(1, {text: todos[0]});
  await execAsync(todos[1]);
  bar.tick(2, {text: todos[1]});
  await execAsync(todos[2]);
  bar.tick(3, {text: todos[2]});
  console.info(chalk.bold('Updating done.'));
}

exports.update = update;
