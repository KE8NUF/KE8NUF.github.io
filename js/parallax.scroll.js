// The plugin code
//reference and credit
//http://www.franckmaurin.com/blog/the-parallax-effect-with-jquery/
(function($){
	$.fn.parallax = function(options){
		var $$ = $(this);
		offset = $$.offset();
		var defaults = {
			'start': 0,
			'stop': offset.top + $$.height(),
			'coeff': 0.95
		};
		var opts = $.extend(defaults, options);
		return this.each(function(){
			$(window).bind('scroll', function() {
				windowTop = $(window).scrollTop();
				if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
					newCoord = windowTop * opts.coeff;
					// background parallax
					//$$.css({
						//'background-position': '0 '+ newCoord + 'px'
					//});
					
					//set margin on element for use with non background image item.
					$$.css({
						'margin-top': '-'+ newCoord + 'px'
					});
				}
			});
		});
	};
})(jQuery);