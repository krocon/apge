const replace = require('replace-in-file');
const chalk = require('chalk');
const fs = require('fs-extra');

const generateRestService = async (name) => {
  console.info('--> generate generateRestService name:', name); // TODO weg
  console.info('Not implemented yet'); // TODO weg

  // await replace.sync({
  //   files: file,
  //   from: /exports: \[([^]+)]/g,
  //   to: `exports: [${logoComponent}]`,
  // });
}

exports.generateRestService = generateRestService;
