const package = require('../package.json');

/**
 * Displays the version string in the console
 *
 */
const version = function () {
  return console.log('apge version:', package.version);
};

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.version = version;

