const chalk = require('chalk');
const exec = require("child_process");

let index = 0;
const todos = [
  'npm@latest', '@angular/cli@latest', 'apge'
]

const update = function () {
  let what = todos[index];
  console.info('Updating ' + chalk.bold.blue(what) + '...');
  exec('npm install -g ' + what, (err, stdout, stderr) => {
    if (err) {
      console.error(chalk.bold.blue('Error while updating ' + what));
    } else {
      console.info('Updated ' + chalk.bold.blue(what) + ' successfully.');
    }
    index++;
    if (index < todos.length) {
      update();
    }
  });
}

exports = update;
