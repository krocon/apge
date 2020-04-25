
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const createReplacements = (data) => {
  return {
    '__app__': data.app,
    '__capitalizedApp__': capitalize(data.app),
    '__prefix__': data.prefix,
    '__capitalizedPrefix__': capitalize(data.prefix),
    '__cp__': data.cp,
    '__capitalizedCp__': capitalize(data.cp),
    '__entity__': data.entity,
    '__capitalizedEntity__': capitalize(data.entity)
  };
}


exports.createReplacements = createReplacements;
