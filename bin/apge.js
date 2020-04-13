#!/usr/bin/env node

const apge = require('../lib');
const version = require('../lib/version.js');
const help = require('../lib/help.js');

// Displays the text in the console
version.version();
help.help();
apge.generate('apge generate', package.version);
