const chalk = require('chalk');
const {exec} = require("child_process");

const todos = [
  // 'npm@latest',
  '@angular/cli@latest',
  'apge'
]

const execAsync = async what => new Promise((resolve, rejected) => {
  exec('npm install -g ' + what, (err, stdout, stderr) => {
    console.info('err', err);
    console.info('stdout', stdout);
    console.info('stderr', stderr);

    if (err) {
      console.error(chalk.bold.blue('Error while updating ' + what));
      rejected(err);

    } else {
      console.info('Updated ' + chalk.bold.blue(what) + ' successfully.');
      resolve()
    }
  });
})

const update = async () => {
  console.info('Updating ' + chalk.bold.blue(what) + '...');
  await execAsync(todos[0]);
  await execAsync(todos[1]);
  await execAsync(todos[2]);
}

exports.update = update;
