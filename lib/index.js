const chalk = require('chalk');

const generate = async options => new Promise((resolve, rejected) => {
  console.info(chalk.bold.blue('TODO') + ' hier gehts weiter.');
  console.info('\n' + chalk.red(JSON.stringify(options, null, 4)));

  resolve();
});

exports.generate = generate;

