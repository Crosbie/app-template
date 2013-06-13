process.env = 'test';

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

main = require('../main');


var fail,succ;

exports['Sample Test'] = {
    setUp: function(done) {
        main.getConfig({}, function(err,res){
            succ = res || false;
            fail = err || false;
            done();
        });
    },

    'getConfig': function(test) {
        test.expect(3);
        // tests here
        test.ok(!fail);
        test.ok(succ);
        test.ok(succ.config);
        test.done();
    }
};



