/*
 * Handle Orientation change on device
 */

initOriHandler = function(){
	$(window).bind('orientationchange', function(e) {

	switch (window.orientation) {

		case 0:
			// portrait mode
		break;

		case 90:
			// landscape left
			alert('turn your phone around!');
		break;

		case -90:
			// landscape right
		break;

		}

	});
};