/*---------------------
 * Android OverRides
 *
 *--------------------
 */

/*
 * Handle ":active" selector not working
 * on Android webKit on 'li' elements
 */
if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
	$(".btn")
		.bind("touchstart", function () {
			$(this).addClass("fake-active");
		})
		.bind("touchend", function() {
			$(this).removeClass("fake-active");
		})
		.bind("touchcancel", function() {
			$(this).removeClass("fake-active");
		});
}