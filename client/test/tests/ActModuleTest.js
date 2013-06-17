
describe('Act module tests',function(){

	it('Null parameters failover', function(){
		var res =Act.call(null, null, null, null);
		assert.equal(res, false);
	});

	it('Make getConfig call to cloud', function(){
		Act.call('getConfig', {},
		function(res){
			assert.ok(res);
		}, function(err){
			assert.ok(!err);
		});
	});
});