function Cow() {
    this.mowed = false;
    this.moo = function moo() {
        this.mowed = true; // mootable state: don't do that at home
        return 'moo!';
    };
}

// cow-test.js
casper.test.begin('Cow can moo', 2, {
    setUp: function(test) {
        this.cow = new Cow();
    },

    tearDown: function(test) {
        this.cow.destroy();
    },

    test: function(test) {
        test.assertEquals(this.cow.moo(), 'moo!');
        test.assert(this.cow.mowed);
        test.done();
    }
});