/*
 * App Initialization
 */
initConFSM();
$(document).ready(function(){
	if(g_debug){
		log('App Initializing...');
	}
    //Attempt to go online via Connectivity FSM
    httpConnectivity.handle('go.online');
	uiInit();
	initOriHandler(); // setup orientation handler if needed
	overRide(); // run iOS or Android overrides
});


/*
 * Load, user defined pages to the DOM at app start up
 * @param - pagesArray
 */
function uiInit(pagesArray){
	if(g_debug){
		log('UI Initializing...');
	}

	// TODO: move this to Login View file
	$('#start').unbind().bind('click', function(){
		LoginCtr.login('user', 'pass', function(success, msg){
			if(success){
				alert("Login Successful");
			}else{
				alert("Login Failed: " + msg);
			}
		});
	});

	//TODO: Decide on best practice for init UI, without prescribing
	// any single UI framework
}