const chalk = require('chalk');
const pkg = require('../package.json');

const printInfo = (cmds, data) => {
  console.info('\n' + chalk.bold('A P Ge') + '\n'
    + chalk.bold.green('A') + 'ngular '
    + chalk.bold.green('P') + 'roject '
    + chalk.bold.green('Ge') + 'nerator   \n');
  console.info('apge version    :', chalk.bold.green(pkg.version));
  console.info('app             :', chalk.bold.blue(data.app));
  console.info('prefix          :', chalk.bold.blue(data.prefix));
  console.info('componentprefix :', chalk.bold.blue(data.cp));
  console.info('\n' + chalk.bold('Generating...'));
  console.info('Steps:');
  for (let i = 0; i < cmds.length; i++) {
    const nr = i + 1;
    console.info(chalk.bold.red((nr < 10 ? '  ' : ' ') + nr) + ') ' + cmds[i]);
  }
  console.info('');
};

exports.printInfo = printInfo;

