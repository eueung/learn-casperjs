var casper = require('casper').create();
var utils = require('utils');

utils.dump(casper.cli.get('foo'));

casper.exit();