var assert = require('assert');
describe('Mathematical Operations - Test Suite', function(){

    // this.timeout(9000);

    beforeEach(function (done) {
        this.timeout(500);
        setTimeout(done, 3000)
    })

    var a = 10;
    var b = 10;

    it('Addition of two numbers', function(done){
        // this.timeout(900);
        // setTimeout(done, 6000);
        var c = a+b;
        assert.equal(c,20);
    });

    it('Subtraction of two numbers', function(){
        var c = a-b;
        assert.equal(c,0);
    });

    it('Multiplication of two numbers', function(){
        var c = a*b;
        assert.equal(c,100);
    });

    it('Division of two numbers', function(){
        var c = a/b;
        assert.equal(c,1);
    });
});