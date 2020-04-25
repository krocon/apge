
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const updateData = (options, d) => {
  d.logo = options.logo;
  d.app = options.app;
  d.capitalizedApp = capitalize(d.app);
  d.prefix = options.prefix;
  d.capitalizedPrefix = capitalize(d.prefix);
  d.cp = options.componentprefix;
  d.capitalizedCp = capitalize(d.cp);

  d.replacements = {
    '__app__': d.app,
    '__capitalizedApp__': d.capitalizedApp,
    '__prefix__': d.prefix,
    '__capitalizedPrefix__': d.capitalizedPrefix,
    '__cp__': d.cp,
    '__capitalizedCp__': d.capitalizedCp,
  }
}


exports.updateData = updateData;
