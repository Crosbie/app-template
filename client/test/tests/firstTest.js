
describe('Act module tests',function(){
	
	it('Null parameters failover', function(){
		var res =actModule.call(null, null, null, null);
		assert.equal(res, false);
	});
});