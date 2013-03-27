/*--------------------
	app/models/Acts

	Module used to build the act calls used throughout the app
--------------------*/

var actModule = (function(module) {
	//interface----------------------------------

		module.call = call // make act call to cloud

	//implementation-------------------------------

	/*
	 * Act Call Function
	 *
	 * @func String - act name
	 * @params Obj 	- params object
	 * @successFn function - success callback
	 * @failFn function - failure callback
	 */
	function call(func, params, successFn, failFn){
		if(!func || !successFn || !failFn){
			console.log('missing params')
			return false;
		}

		var params = params || {};

		$fh.act({
			'act' : func,
			'req' : params
		}, function(res){

			console.log('Act Success', res);
			return successFn(res);
		}, function(err, msg){

			console.log('Act Fail', err);
			return failFn(err, msg);
		});
	};

	return module;

})(actModule || {});
