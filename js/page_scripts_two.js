//document.addEventListener('DOMContentLoaded', function() {
document.onreadystatechange = function () {
	//"loading" document is still loading
	//"interactive" document has finished loading. We can access DOM elements
	//"complete" document page has finished completely and fully loaded
	if (document.readyState === 'interactive') {
		
	}
}

//function to equalize heights of content when needed
function equalContentHeight() {
	if( $(window).width() >= 800 ) {
		$(document).each(function(event) {
			//$(document).on('load', function() {
				if( $('.match-height').length ) {
					$('.section.match-height').each(function() {
						var $contentHeight = 0;
						var $columns = $('.col', this);
						var $maxHeight = Math.max.apply(Math, $columns.map(function() {
							//return $(this).outerHeight(true);
							return $(this).height();
						}).get());
						$columns.height($maxHeight);
						$columns.css({
							height: $maxHeight + 'px'
						});
						//window.console&&console.log('Equalize content height was called and ran');
					});
				}
			//});
		});
	}
}

(function($){
	$(function(){
		
		//*****
		//show width height function for responsive design
		//*****
		function showViewPortSize(display) {
			if(display) {
				//var $viewportHeight = window.innerHeight;
				//var $viewportWidth = window.innerWidth;
				var $viewportHeight = window.outerHeight;
				var $viewportWidth = window.outerWidth;
				$('body').prepend('<div id="viewport-size" style="position:fixed; bottom:10px; left:10px; display:none; z-index:9999; padding:10px; text-align:center; font-size: 1.0em; background:rgba(35, 35, 35, 0.75); color:#fff;">W: '+ $viewportWidth +' <br /> H: '+ $viewportHeight +'</div>');
				$(window).on('resize', function() {
					var $viewportHeight = window.outerHeight;
					var $viewportWidth = window.outerWidth;
					$('#viewport-size').html('W: ' + $viewportWidth + ' <br /> H: ' + $viewportHeight );
				});
				console.log('W: ' + $viewportWidth + ' H: ' + $viewportHeight );
			}
		}
		showViewPortSize(true);
		
		
		//*****
		//menu togggle button
		//*****
		$('.menu-icon').on('click', function() {
			$("nav ul").toggleClass('showing');
			$(this).toggleClass('open-showing');
		});
		//*****
		//menu scrolling effects
		//*****
		$(window).on('scroll load', function() {
			if($(window).scrollTop()) {
				$('nav').addClass('reveal');
				$('.menu-icon').addClass('active');
			} 
			else {
				$('nav').removeClass('reveal');
				$('.menu-icon').removeClass('active');
            }
		});
		//*****
		//add active class to menu clicks
		//*****
		// Get the container element
		var lnkContainer = document.getElementById('site-nav');
		// Get all links with class="nav-link" inside the container
		var lnk = lnkContainer.getElementsByClassName('nav-link');
		// Loop through the links and add the active class to the current/clicked button
		for (var i = 0; i < lnk.length; i++) {
			lnk[i].addEventListener("click", function() {
				var current = document.getElementsByClassName('active');
				current[0].className = current[0].className.replace(' active', "");
				this.className += ' active';
			});
		}
		//*****
		//click anywhere but nav and close the menu
		//*****
		//nav link click anywhere else close menu
		if($('.menu-icon').is(':visible')){
		//if($('.menu-icon').hasClass('open-showing')){
			$('#site-nav').on('click', function(event) {
				//event.preventDefault();  // Might cause problems depending on implementation
				event.stopPropagation();

				$(document).one('click', function (event) {
					if(!$(event.target).is('#site-nav')) {
						// code to hide menus
						$('#site-nav ul.showing').removeClass('showing');
						$('.menu-icon').removeClass('open-showing');
					}
				});
				
				$(window).on('scroll', function() {
					if($('.menu-icon').hasClass('open-showing')){
						$('#site-nav ul.showing').removeClass('showing');
						$('.menu-icon').removeClass('open-showing');
					}
				});
			});
		}
		//*****
		//progress bar with back to top
		//*****
		//Scroll back to top
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
		//*****
		//page loading scripts for loading animation
		//*****
		// Polling for the sake of my intern tests
		var interval = setInterval(function() {
			if(document.readyState === 'complete') {
				$('#page-load-wrapper').fadeOut();
				clearInterval(interval);
				console.log('Page Loaded');
				//done();
			} else {
				$('#page-load-wrapper').fadeIn();
				console.log('Page Not Loaded Yet.');
			}
		}, 100);
		
		equalContentHeight();
	});
})(jQuery);