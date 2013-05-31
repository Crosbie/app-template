/*
 * App Initialization
 */

$(document).ready(function(){
	if(g_debug){
		console.log('App Initialized');	
	}
	
	uiInit();
});


/*
 * Load, user defined pages to the DOM at app start up
 * @param - pagesArray
 */
function uiInit(pagesArray){
	if(g_debug){
		console.log('UI Initialized');	
	}

	//TODO: Decide on best practice for init UI, without prescribing
	// any single UI framework

}