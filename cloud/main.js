/*
 *	Cloud functions
 */

// --- dependencies ------


var Backend = require('./backend.js');

// Test function
exports.getConfig = function(params, cb){
	return cb(null,{config: 'true'});
};

/*
 * Login Function
 * Return status false and error message if login fails
 * Save error callback for network issues
 */
exports.login = function(params, cb){
	Backend.login(params, function(err, data){
		return cb(err, data);
	});
};

exports.heartbeat = function(params, cb) {
    return cb(null,{success:'heartbeat'});
}