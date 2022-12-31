(function ($) {
    var options = {};
    var oldx = 0;
    var direction = "";
    var stop_timeout = false;
    var stop_check_time = 150;
	var right = 0;
	var left = 0;
    $.mousedirection = function (opts) {
        var defaults = {};
        options = $.extend(defaults, opts);
        $(document).bind("mousemove", function (e) {
            var activeElement = e.target || e.srcElement;
            if (e.pageX > oldx) {
                direction = "right";
				//right = 1;
				//left = 0;
            } else if (e.pageX < oldx) {
                direction = "left";
				//left = 1;
				//right = 0;
            }

            clearTimeout(stop_timeout);
            stop_timeout = setTimeout(function () {
                direction = "stop";
                $(activeElement).trigger(direction);
                $(activeElement).trigger({
                    type: "mousedirection",
                    direction: direction
                });
            }, stop_check_time);

            $(activeElement).trigger(direction);
            $(activeElement).trigger({
                type: "mousedirection",
                direction: direction
            });
            oldx = e.pageX;
        });
    }
})(jQuery)