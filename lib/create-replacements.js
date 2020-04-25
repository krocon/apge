
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const createReplacements = (data) => {
  let ret = {
    '__app__': data.app,
    '__capitalizedApp__': capitalize(data.app),
    'AppXyz': capitalize(data.app),
    '__prefix__': data.prefix,
    '__capitalizedPrefix__': capitalize(data.prefix),
    '__cp__': data.cp,
    '__capitalizedCp__': capitalize(data.cp)
  };
  if (data.entity) {
    ret.__entity__ = data.entity;
    ret.__capitalizedEntity__ = capitalize(data.entity);
  }
  return ret;
}


exports.createReplacements = createReplacements;
