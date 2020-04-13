const chalk = require('chalk');

/**
 * Generates the entire app
 *
 * @param {options} {appname: '...', prefix: '...'}
 */
const generate = function (options) {
  console.info(chalk.bold.cyan('TODO') + ' hier gehts weiter.');
  console.info('\n' + chalk.red(JSON.stringify(options, null, 4)));

  return console.info(string_to_say);
};

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.generate = generate;

