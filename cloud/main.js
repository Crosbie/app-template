/*
 *	Cloud functions
 */

// --- dependencies ------


var Backend = require('./backend.js')

// Test function
exports.getConfig = function(params, cb){
	return cb({config: 'true'});
}

/*
 * Login Function
 * Return status false and error message if login fails
 * Save error callback for network issues
 */
exports.login = function(params, cb){
	var user = params.user;
	var pass = params.pass;
	var res  = {};
	if(!user || !pass){
		res.status = false;
		res.error  = "Username or Password missing";
		return cb(null, res);
	} else {
		Backend.login(user,pass, function(success){
			if(success){
				res.status = true;
				res.error  = null;
				return cb(null, res);
			} else {
				res.status = false;
				res.error  = "Incorrect Username or Password";
				return cb(null, res);
			}
		});
	}
}