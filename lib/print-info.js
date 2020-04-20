const chalk = require('chalk');
const pkg = require('../package.json');

const printInfo = (cmds, data) => {

  const a = chalk.bold.green('A');
  const p = chalk.bold.green('P');
  const ge = chalk.bold.green('Ge');

  console.info('');
  console.info(a + 'ngular ' + p + 'roject ' + ge + 'nerator   \n');
  console.info('apge version    :', chalk.bold.green(pkg.version));
  console.info('app             :', chalk.bold.blue(data.app));
  console.info('prefix          :', chalk.bold.blue(data.prefix));
  console.info('componentprefix :', chalk.bold.blue(data.cp));
  console.info('\n' + chalk.bold('G e n e r a t i n g'));
  console.info('\nSteps:');
  for (let i = 0; i < cmds.length; i++) {
    const nr = i + 1;
    console.info(chalk.bold.red((nr < 10 ? '  ' : ' ') + nr) + ') ' + cmds[i]);
  }
  console.info('');
};

exports.printInfo = printInfo;

