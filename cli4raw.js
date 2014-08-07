var casper = require('casper').create();
var utils = require('utils');

utils.dump(casper.cli.get('foo'));
utils.dump(casper.cli.raw.get('foo'));

casper.exit();