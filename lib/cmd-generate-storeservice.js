const replace = require('replace-in-file');
const chalk = require('chalk');
const fse = require('fs-extra');
const {renameFiles} = require("./rename-files");
const {fixFiles} = require("./fix-files");
const {createReplacements} = require("./create-replacements");
const {updateData} = require("./update-data");

const data = {};

const generateStoreService = async (name, options) => {
  updateData(options, data);
  data.entity = name;
  const replacements = createReplacements(data);

  await fse.copy(__dirname + '/../templates/entity-store/', './src/app/');
  await fixFiles('./src/app/**/*.*', replacements);
  await renameFiles('./src/app/', replacements);

  console.info('Done');
}

exports.generateStoreService = generateStoreService;
