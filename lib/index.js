const chalk = require('chalk');

/**
 * Generates the entire app
 *
 * @param {options} {appname: '...', prefix: '...'}
 */
const generate = async options => new Promise((resolve, rejected) => {
  console.info(chalk.bold.blue('TODO') + ' hier gehts weiter.');
  console.info('\n' + chalk.red(JSON.stringify(options, null, 4)));

  resolve();
});

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.generate = generate;

