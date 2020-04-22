const chalk = require('chalk');
const pkg = require('../package.json');

const printInfo = (cmds, data) => {

  const a = chalk.bold.green('A');
  const p = chalk.bold.green('P');
  const ge = chalk.bold.green('Ge');

  console.info('');
  console.info(a + 'ngular ' + p + 'roject ' + ge + 'nerator   \n');
  console.info('APGe version    :', chalk.bold.cyan(pkg.version));
  console.info('app name        :', chalk.bold.cyan(data.app));
  console.info('app prefix      :', chalk.bold.cyan(data.prefix));
  console.info('componentprefix :', chalk.bold.cyan(data.cp));
  console.info('\n' + chalk.bold('G e n e r a t i n g'));
  console.info('\nSteps:');
  for (let i = 0; i < cmds.length; i++) {
    const nr = i + 1;
    console.info(chalk.bold.green((nr < 10 ? '  ' : ' ') + nr) + ') ' + cmds[i]);
  }
  console.info('');
};

exports.printInfo = printInfo;

