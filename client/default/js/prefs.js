/*
 * ---- App Global Variables -----
 */
if (typeof App  == "undefined"){
    App= {}; //set a global namespace for the app
}
var g_debug     = true;	// true to output excessive logging
var g_dummyData = true;	// true to use live data, false to use dummy data
var g_dev       = true;	// true if developing locally


/*
 * Custom log function
 * Logging can be easily switched off by
 * setting g_debug to false.
 *
 * Accepts 1 or 2 inputs
 */
App.log = function(msg,msg2){
	if(g_debug){
		if(msg && msg2){
			console.log(msg, msg2);
		} else if(msg){
			console.log(msg);
		}
	}
};