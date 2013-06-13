main = require('../main');


var fail,succ;
exports['Login Test'] = {
    setUp: function(done) {
        done();
    },

    'Login with correct credentials': function(test) {
        test.expect(4);
        var params = {username:'eoin',password:'1234'};
        main.login(params,function(err,res){
            test.ok(!err);
            test.ok(res);
            test.equal(res.status,true, "Login status should be true");
            test.equal(res.error, null, "Should receive no error message");
            test.done();
        });
    },

    'Login without credentials': function(test){
        test.expect(4);
        main.login({},function(err,res){
            test.ok(!err);
            test.ok(res);
            test.equal(res.status,false, "Login status should be false, when no params passed");
            test.equal(res.error, "Username or Password missing", "Should receive error message");
            test.done();
        });
    }
};
