/*
 * App Initialization
 */

$(document).ready(function(){
	if(g_debug){
		console.log('App Initializing...');
	}

	uiInit();

	$(window).bind('orientationchange', function(e) {

	switch ( window.orientation ) {

		case 0:
			alert('portrait mode');
		break;

		case 90:
			alert('landscape mode screen turned to the left');
		break;

		case -90:
			alert('landscape mode screen turned to the right');
		break;

		}

	});
});


/*
 * Load, user defined pages to the DOM at app start up
 * @param - pagesArray
 */
function uiInit(pagesArray){
	if(g_debug){
		console.log('UI Initializing...');
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