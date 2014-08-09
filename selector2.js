//var casper = require('casper').create();

casper.test.begin('The heading exists', 1, function suite(test) {
    casper.start('http://eueung.github.io/learn-casperjs/page01.html', function() {
        test.assertExists('h1.page-title');
    }).run(function() {
        test.done();
    });
});