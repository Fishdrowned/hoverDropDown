/*!
 * hoverDropDown
 * A jQuery Plugin 
 * https://github.com/Fishdrowned/hoverDropDown
 * http://fishdrowned.my.phpcloud.com/js/jquery.hoverDropDown.html
 *
 * Version: 1.0
 * 2013-01-18T13:23UTC+08:00
 *
 * Copyright 2013, Fishdrowned CHEN <fishdrowned@gmail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function($){$.fn.hoverDropDown = function(dropDown, options, handler){
	$.fn.hoverDropDownDefaults = $.fn.hoverDropDownDefaults || {
		slideDown: 300,
		slideUp: 300,
		slideUpDelay: 300
	};
	options = $.extend({}, $.fn.hoverDropDownDefaults, options);
	(handler || this).hover(function(){
		var subject = $(this).find(dropDown);
		if (!subject.length) subject = dropDown;
		if (subject.length != 1) return;
		clearTimeout(subject.data("timer"));
		if (dropDown.length > 1) dropDown.each(function(){
			if (subject.length == 1 && this === subject[0]) return;
			$(this).stop(true, true).hide();
		});
		if (subject.queue() && subject.queue().length) return;
		subject.slideDown(options.slideDown);
	}, function(){
		var subject = $(this).find(dropDown) || dropDown;
		subject.data("timer", setTimeout(function(){
			subject.slideUp(options.slideUp);
		}, options.slideUpDelay));
	});
	return this;
}})(jQuery);
