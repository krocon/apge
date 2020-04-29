const {unknownToKebab} = require("to-kebab");
const {kebabToPascal} = require("to-kebab");
const {capitalize} = require("to-kebab");


/*
    appLabel         Click&Ride   AppXyz
    app                    demo   __app__
    cp (company prefix)      db   __cp__
    entityname   ersatz-konzept   __kebabentity__
    folder:   db-ersatz-konzept   __cp____kebabentity__
    class:       DbEsatzKonzept   __capcp____pascalentity__
*/

const createReplacements = (data) => {
  const ret = {};

  if (data.appLabel) {
    ret.AppXyz = data.appLabel.trim();
  }

  if (data.app) {
    ret.__app__ = data.app.toLowerCase();
  }

  //Company prefix:
  if (data.cp) {
    ret.__cp__ = data.cp.toLowerCase();
    ret.__capcp__ = capitalize(data.cp);
  }

  // Entity:
  if (data.entity) {
    ret.__kebabentity__ = unknownToKebab(data.entity);
    ret.__pascalentity__ = kebabToPascal(ret.__kebabentity__);
  }
  return ret;
}

exports.createReplacements = createReplacements;
