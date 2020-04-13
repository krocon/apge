const package = require('../package.json');

/**
 * Displays the version string in the console
 */
const version = function () {
  return console.log('apge version:', package.version);
};

exports = version;

