var main = require('../main');
var assert = require('assert');

describe('Testing Login function', function() {

    it ('login should always succeed', function(done) {
        var params = {
            username: "test",
            password: "1234"
        };

        main.login(params,function(err,data){
            assert.ok(!err);
            assert.ok(data);
        });

    });

});








