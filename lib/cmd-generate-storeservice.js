const replace = require('replace-in-file');
const chalk = require('chalk');
const fse = require('fs-extra');
const {renameFiles} = require("./rename-files");
const {fixFiles} = require("./fix-files");
const {updateData} = require("./update-data");


const printDone = (r) => {
  console.info(`
  ${chalk.bold('Store Service successfully generated.')}
  See: src/app/${r.__cp__}-${r.__entity__}-store/

.`);
};

const data = {};

const generateStoreService = async (name, options) => {
  data.entity = name;
  updateData(options, data);
  console.info('data', JSON.stringify(data, null, 4)); // TODO weg

  await fse.copy(__dirname + '/../templates/entity-store/', './src/app/');
  await fixFiles('./src/app/**/*.*', data.replacements);
  await renameFiles('./src/app/', data.replacements);

  printDone(data.replacements);
}

exports.generateStoreService = generateStoreService;
