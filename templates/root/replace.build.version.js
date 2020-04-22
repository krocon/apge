/**
 * This helps you to show the build (compile) time in your angular app.
 *
 * Sets a german date string to the 'version' property on
 * your (angular) src/environments/environment.prod.ts file.
 *
 * Be sure to add a version property first:
 *
 *    export const environment = {
 *      production: true,
 *      version: '{BUILD_VERSION}',
 *
 * Then you can show the verion string in your menu, footer or about component:
 *    public version = environment.version;
 *    <small>Version: {{version}}</small>
 *
 * Enhance your packgae.json scripts with
 *   "build": "npm run _update-build-version & ng build --prod",
 *   "_update-build-version": "node replace.build.version.js",
 *
 * npm run build   will now update the version string to the current (german) date.
 */

const replace = require('replace-in-file');

const dateOptions = {
  timeZone: "Europe/Berlin",
  month: '2-digit',
  year: 'numeric',
  day: '2-digit',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit'
};

const buildVersion = new Date()
  .toLocaleString("de-DE", dateOptions)
  .replace(/,/g, '');

const regs = [
  /version: '{BUILD_VERSION}'/g,
  /version: '[^']*'/g,
];

const replaceOptions = {
  files: 'src/environments/environment.prod.ts',
  to: 'version: \'' + buildVersion + '\'',
  allowEmptyPaths: false,
};

function tryToReplace(idx) {
  try {
    const ret = replace.sync({...replaceOptions, from: regs[idx]});
    if (ret.length && ret[idx].hasChanged) {
      console.info('Build version set: ' + buildVersion);
      return true;
    }
  } catch (error) {
    return false;
  }
}

let result = tryToReplace(0);
if (!result) {
  result = tryToReplace(1);
}
if (!result) {
  console.warn('Could NOT set build version to ' + buildVersion);
}
