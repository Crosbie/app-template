
describe('Act module tests',function(){
	
	it('Null parameters failover', function(){
		var res =actModule.call(null, null, null, null);
		assert.equal(res, false);
	});

	it('Make getConfig call to cloud', function(){
		actModule.call('getConfig', {}, 
		function(res){
			assert.ok(res);
			console.log(res);
		}, function(err){
			console.error(err);
		});
	});
});