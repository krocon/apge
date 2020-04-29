const replace = require('replace-in-file');
const chalk = require('chalk');
const fse = require('fs-extra');
const {createReplacements} = require("./create-replacements");
const {renameFiles} = require("./rename-files");
const {fixFiles} = require("./fix-files");
const {updateData} = require("./update-data");


const printDone = (r) => {
  console.info(`
  ${chalk.bold('Store Service successfully generated.')}
  See: src/app/${r.__cp__}-${r.__kebabentity__}-store/

.`);
};

const data = {};

const generateStoreService = async (name, options) => {
  data.entity = name;
  updateData(options, data);
  const replacements = createReplacements(data);

  await fse.copy(__dirname + '/../templates/entity-store/', './src/');
  await fixFiles('./src/app/**/*.*', replacements);
  await renameFiles('./src/app/', replacements);

  printDone(replacements);
}

exports.generateStoreService = generateStoreService;
