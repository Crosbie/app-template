
describe('Store module tests',function(){

    // Test Saving to Local Storage
    it('Test Save function', function(){
        // valid save call
        Store.save("app_myProfile", {param1: true},
            function(success, data){
                assert.ok(success);
                assert.ok(!data);
            }
        );
        // invalid save call
        var key = null;
        Store.save(key, {}, function(success,data){
            assert.ok(!success);
            assert.ok(data);
        });
    });



    // Test Loading from Local Storage
    it('Test Load function', function(){
        // valid load call
        Store.load("app_myProfile", function(success,data){
            assert.ok(success);
            assert.ok(data);
        });

        // invalid load call
        Store.load("asdf", function(success,data){
            assert.ok(!success);
            assert.ok(data);
        });
    });


    // Test Remove from Local Storage
    it('Test Remove function', function(){
        // valid remove call
        Store.remove("app_myProfile", function(success,data){
            assert.ok(success);
        });

        // invalid remove call
        Store.remove("asdf", function(success,data){
            assert.ok(!success);
            assert.ok(data);
        });
    });


    // Test Clear All from Local Storage
    it('Test ClearAll function', function(){
        // valid clearAll call
        Store.clearAll(function(success,data){
            assert.ok(success);
        });
    });


});