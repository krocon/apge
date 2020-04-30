const fse = require('fs-extra');
const path = require('path');

const sourceRoot = __dirname + '/../angular-demo-app';

const copyBase = async () => {
  let src = path.join(sourceRoot, '/src/app/');
  let target = path.join(__dirname, '/templates/new/app');

  fse.emptyDirSync(target);
  fse.copySync(
    src,
    target,
    {
      filter:
        (s, t) => {
          if (s.indexOf('__kebabentity__') > -1) return false;
          if (s.indexOf('__cp__') > -1) return true;
          return true;
        }
    });
};

const copyEntityService = async () => {
  let src = path.join(sourceRoot, '/src/app/__cp__-__kebabentity__-service');
  let target = path.join(__dirname, '/templates/entity-service/app/__cp__-__kebabentity__-service');
  fse.emptyDirSync(target);
  fse.copySync(src, target);

  let src2 = path.join(sourceRoot, '/src/assets/mock-data/__kebabentity__');
  let target2 = path.join(__dirname, '/templates/entity-service/assets/mock-data/__kebabentity__');
  fse.emptyDirSync(target2);
  fse.copySync(src2, target2);
};

const copyStoreService = async () => {
  let src = path.join(sourceRoot, '/src/app/__cp__-__kebabentity__-store');
  let target = path.join(__dirname, '/templates/entity-store/app/__cp__-__kebabentity__-store');
  fse.emptyDirSync(target);
  fse.copySync(src, target);
};

const copyAll = async () => {
  await copyBase();
  await copyEntityService();
  await copyStoreService();
};

copyAll();
