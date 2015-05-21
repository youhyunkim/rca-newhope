(function(){
	var ua = navigator.userAgent,
	isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	if (isMobileWebkit) {
		$('html').addClass('mobile');
	}

	$(function(){
		var iScrollInstance;

		if (isMobileWebkit) {
			// disable parallax on mobile
			/*iScrollInstance = new iScroll('wrapper');

			$('#scroller').stellar({
				scrollProperty: 'transform',
				positionProperty: 'transform',
				horizontalScrolling: false,
				verticalOffset: 150
			});*/
		} else {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 150
			});
		}
	});
})();