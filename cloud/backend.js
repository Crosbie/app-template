/*--------------------
	Connects to Customer Backend System
	
--------------------*/


/*
 * Login Function
 *
 * @param {String}		- username
 * @param {String}		- password
 * @param {function}	- callback function
 */
exports.login = function(params, cb){
	var self = this;
	var user = params.username;
	var pass = params.password;
	var res  = {};
	if(!user || !pass){
		res.status = false;
		res.error  = "Username or Password missing";
		return cb(null, res); // FAIL
	} else {
		self.backendCall('login', params, function(success, data){
			if(success){
				res.status = true;
				res.error  = null;
				return cb(null, res); // SUCCESS
			} else {
				res.status = false;
				res.error  = "Incorrect Username or Password";
				return cb(null, res); // FAIL
			}
		});
	}
},


/*
 * Backend Call function
 * All backend functions use this to access the external system
 * @param {String}		- function name on backend
 * @param {object}		- params object
 * @param {function}	- callback
 */
exports.backendCall = function(fn, params, cb){
	// TODO: make external web call
	return cb(true, {test: 'test'});
};






