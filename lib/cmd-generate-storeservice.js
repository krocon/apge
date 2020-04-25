const replace = require('replace-in-file');
const chalk = require('chalk');
const fs = require('fs-extra');

const generateStoreservice = async (name) => {
  const jsonObject = fs.readJsonSync('/apge.json');
  if (!jsonObject) {
    console.error(chalk.bold.red('The generate command requires to be run in an Angular project, but a project definition (apge.json) could not be found.'))
  }
  console.info('--> generate storeservice name:', name); // TODO weg
  console.info('--> generate storeservice  type:', type); // TODO weg

  // await replace.sync({
  //   files: file,
  //   from: /exports: \[([^]+)]/g,
  //   to: `exports: [${logoComponent}]`,
  // });
}

exports.generateStoreservice = generateStoreservice;
