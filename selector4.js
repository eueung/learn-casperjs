casper.test.begin('Page content tests', 1, function suite(test) {

    casper.start('http://eueung.github.io/learn-casperjs/page01.html', function() {
        this.test.assertExists({
            type: 'xpath',
            path: '//*[@class="plop"]'
        }, 'the element exists');
    }).run(function() {
        test.done();
    });
});