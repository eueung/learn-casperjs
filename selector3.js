casper.test.begin('Page content tests', 3, function suite(test) {
    casper.start('http://eueung.github.io/learn-casperjs/page01.html', function() {
        test.assertExists('h1.page-title');
        test.assertSelectorHasText('h1.page-title', 'Hello');
        test.assertVisible('footer');
    }).run(function() {
        test.done();
    });
});