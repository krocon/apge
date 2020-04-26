// abc -> Abc
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// ABC -> aBCc
const lowerFirst = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toLowerCase() + s.slice(1);
};

// ABC -> abc
const toLowerCase = (s) => {
  if (typeof s !== 'string') return ''
  return s.toLowerCase();
};

// ersatzKonzept -> ersatz-konzept
const camelToKebab = (s) => {
  if (typeof s !== 'string') return ''
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
};

// ersatz-konzept -> ersatzKonzept
const kebabToCamel = (s) => {
  if (typeof s !== 'string') return ''
  return s.replace(/-([a-z0-9])/g, (g) => {
    return g[1].toUpperCase();
  });
};

// ersatz-konzept -> ErsatzKonzept
const kebabToPascal = (s) => {
  if (typeof s !== 'string') return ''
  return capitalize(kebabToCamel(s));
};

// ersatz-konzept -> ErsatzKonzept
const kebabToSnake = (s) => {
  if (typeof s !== 'string') return ''
  return s.replace(/-/g, '_');
};

// ? -> ersatz-konzept
const unknownToKebab = (s) => {
  return camelToKebab(kebabToCamel(s))
    .replace(/(\D+)(\d+)$/g, '$1-$2')
    .replace(/\s|_/g, '-');
};


const demo = () => {
  /*
    camelCase2
    PascalCase2
    snake_case_2
    kebab-case-2
   */
  const kebab = 'ersatz-konzept-12';
  const inputs = [
    'ersatzKonzept',
    'ErsatzKonzept',
    'ersatz-Konzept',
    'ersatz-konzept',
    'ERSATZ-KONZEPT',
    'ersatz_Konzept',
    'ersatz_konzept',
    'ERSATZ_KONZEPT',
    'ersatz Konzept',

    'ersatz-KonzeptDialog',
    'ersatz_KonzeptDialog',

    'ersatzKonzept12',
    'ersatzKonzept-12',
    'ERSATZ-KONZEPT12',
    'ersatzKonzept12',
    'ERSATZ_KONZEPT12',
  ];

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    console.info('unkownToKebab(' + input + ') -> ' + unknownToKebab(input));
  }
  console.info();
  console.info('kebabToCamel (' + kebab + ') -> ' + kebabToCamel(kebab));
  console.info('kebabToPascal(' + kebab + ') -> ' + kebabToPascal(kebab));
  console.info('kebabToSnake (' + kebab + ') -> ' + kebabToSnake(kebab));
};


exports.unknownToKebab = unknownToKebab;
exports.kebabToCamel = kebabToCamel;
exports.kebabToPascal = kebabToPascal;
exports.kebabToSnake = kebabToSnake;
exports.capitalize = capitalize;
exports.lowerFirst = lowerFirst;
exports.toLowerCase = toLowerCase;

