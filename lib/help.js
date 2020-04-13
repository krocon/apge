/**
 * Displays a string in the console
 *
 */
const help = function () {
  return console.info(chalk.bold.blue('TODO') + ' show help');
};

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.help = help;

