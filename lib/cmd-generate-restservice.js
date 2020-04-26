const replace = require('replace-in-file');
const chalk = require('chalk');
const fse = require('fs-extra');
const {createReplacements} = require("./create-replacements");
const {renameFiles} = require("./rename-files");
const {fixFiles} = require("./fix-files");
const {updateData} = require("./update-data");

// TODO generateRestService()

// const printDone = () => {
//   console.info(`
//
//  ${chalk.bold('Rest Service successfully generated.')}
//  See:
//    cd ${data.app}
//    ng serve
//
// .`);
// };

const data = {};

const generateRestService = async (name, options) => {
  updateData(options, data);
  data.entity = name;
  const replacements = createReplacements(data);

  console.info('--> generate generateRestService name:', name); // TODO weg
  console.info('Not implemented yet'); // TODO weg

  // await fse.copy(__dirname + '/../templates/entity-store/', './' + data.app + '/src/app/');
  //
  // await fixFiles('./' + data.app + '/src/app/**/*.*', replacements);
  // await renameFiles('./' + data.app + '/src/app/', replacements);
}

exports.generateRestService = generateRestService;
