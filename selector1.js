var casper = require('casper').create();

casper.start('http://eueung.github.io/learn-casperjs/page01.html', function() {
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
});

casper.run();
//casper.exit();