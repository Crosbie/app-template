/*
 * App Initialization
 */

$(document).ready(function{
	console.log('Loaded');

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

$(document).ready(function() {
	importViews(function() {
		changeView("mainPage");
		var mainPageView = getView("mainPage");
		mainPageView.find("#info").html("Loading User Data....");
		users.load(function() {
			mainPageView.find("#info").html("User Data Loaded!");
			mainPageView.find("#loginBtn").removeAttr("disabled");
			mainPageView.find("#loginBtn").button("enable");
		});
		bindEvents();
	});
});