const {createReplacements} = require("./create-replacements");

const updateData = (options, d) => {
  d.logo = options.logo;
  d.app = options.app;
  d.prefix = options.prefix;
  d.cp = options.componentprefix;

  d.replacements = createReplacements(d);
}


exports.updateData = updateData;
