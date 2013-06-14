/*--------------------
	app/controllers/Login

	Controller used to handle login logic
--------------------*/

var LoginCtr = (function(module) {
	//interface----------------------------------

		module.login = login; // make act call to cloud

	//implementation-------------------------------

	/*
	 * Login Call Function
	 *
	 * @user String		- username
	 * @pass String		- password
	 * @cb function		- callback function
	 */
	function login(user,pass,cb){
		if(!user || !pass || !cb){
			console.log('missing username, password or callback');
			return cb(false, 'Client error: Missing Params');
		}

		Act.call("login", {username: user,password:pass},
			function(res){
				if(res.status){
					console.log('Login Succeeded');

					// TODO: logic for storing session token locally

					return cb(true);
				} else {
					console.log('Login Failed');
					return cb(false, res.error);
				}

			}, function(msg, err){
				console.log("Act Error:", msg);
				return cb(false, err.error);
			}
		);
	}

	return module;

})(LoginCtr || {});






