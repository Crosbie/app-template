/*
 * App Initialization
 */

$(document).ready(function{
	alert('Loaded');

	uiInit();
});


/*
 * Load, user defined pages to the DOM at app start up
 * @param - pagesArray
 */
function uiInit(pagesArray){
	var initPages  	= ['login', 'home'];
	var $content 	= $('#content');
	var pagesToLoad = pagesArray || initPages;

	for(var i=0 ; i<pagesToLoad.length; i++){
		$content.html('');
		$content.append(pagesToLoad[i]);
	}
	

}