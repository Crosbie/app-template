/*
 * ---- Mock Act Calls -----
 * This is a file to mock all the Apps $fh.act calls for the purpose of client-side testing.
 * Here we return the expected from the cloud, based on the params obj that is sent from the client.
 */

var $fh = {};

$fh.act = function(params, success, fail){
	var act = params.act || '';
	var req = params.req || {};

	// switch statement to run the required act call
	switch(act){
		case "getConfig":
			return success({config: true});

		default :
			// if act value is empty or a matching act call does not exist above, the failure callback is returned
			return fail("Error: Act doesnt exist");
	}
};

$fh.data = function(params,success,fail){
	var act = params.act || null;
	var key = params.key || null;
	var val = params.val || null;

	if(act===null || key===null){
		return fail('Missing params', {});
	}

	switch(act){
		case 'save':
			localStorage.setItem(key, val);
			return success();
		case 'load':
			var res = localStorage.getItem(key);
			if(res){
				return success(res);
			} else {
				return fail('Key doesnt exist');
			}
			break;

		case 'remove':
			var start = localStorage.length;
			localStorage.removeItem(key);
			var end = localStorage.length;
			if(start===end){
				return fail('Key doesnt exist', {});
			}
			return success();
	}
};