/*---------------------
 * Android OverRides
 *
 *--------------------
 */

/*
 * Handle ":active" selector not working
 * on Android webKit on 'li' elements
 */

// $(".btn")
// 	.bind("touchstart", function () {
// 		$(this).addClass("fake-active");
// 	})
// 	.bind("touchend", function() {
// 		$(this).removeClass("fake-active");
// 	})
// 	.bind("touchcancel", function() {
// 		$(this).removeClass("fake-active");
// 	});

$(".btn")
	.click(function () {
		var self = this;
		$(this).addClass("fake-active");
		// setTimeout(function(){
		// 	$(self).removeClass("fake-active");
		// },100);
	});
	// .bind("touchend", function() {
	// 	$(this).removeClass("fake-active");
	// })
	// .bind("touchcancel", function() {
	// 	$(this).removeClass("fake-active");
	// });