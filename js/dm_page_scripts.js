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

var ua = navigator.userAgent;
var isMobile = {
	Android: function() {
		return ua.match(/Android/i);
	},
	BlackBerry: function() {
		return ua.match(/BlackBerry/i);
	},
	iOS: function() {
		return ua.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return ua.match(/Opera Mini/i);
	},
	Windows: function() {
		return ua.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
		
var iframe = $('#frame-badge');
function iframeReady() {
//$(window).on('load', function () {
	if( isMobile.any() ) {
	//if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//$(window).bind('load',function(){
		setTimeout( function() {
			if($(window).width() <= 960) {
				var iframe = document.getElementById('frame-badge');
				var styleAdd = document.createElement('style');
				styleAdd.textContent =
					'@media only screen and (max-width : 960px), only screen and (max-device-width : 960px){' +
					'.card-front img {' +
					'max-height: 283px;' +
					'}' +
					'}' 
				;
				iframe.contentDocument.head.appendChild(styleAdd);
				console.log('resied iframe orientation change from iPadOrentation function');
			}
		}, 500);
		//});
	} else {
		if($(window).width() <= 960) {
			var iframe = document.getElementById('frame-badge');
			var styleAdd = document.createElement('style');
			styleAdd.textContent =
				'@media only screen and (max-width : 960px), only screen and (max-device-width : 960px){' +
				'.card-front img {' +
				'max-height: 283px;' +
				'}' +
				'}' 
			;
			iframe.contentDocument.head.appendChild(styleAdd);
			console.log('resized iFrame in general run/rules');
		}
	}
	//$(window).trigger('resize');
	console.log('Ran Frame loaded scripts');
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
		//responsive sticky navigation
		//*****
		// Menu-toggle button
		$('.menu-icon').on('click', function() {
			$('.menu').toggleClass('shown-menu');
			$('nav ul').toggleClass('menu-showing');
			$('#nav').toggleClass('open-menu');
		});
		// Scrolling Effect

		$(window).on('scroll', function() {
			var yScrollTarget = 10;
			var scrollPosition = $(this).scrollTop();
			//if($(window).scrollTop()) {
			if(scrollPosition >= yScrollTarget) {
				$('nav').addClass('fixed-nav');
			} else {
				$('nav').removeClass('fixed-nav');
			}
		});
		//*****
		//add active class to menu clicks
		//*****
		// Get the container element
		var lnkContainer = document.getElementById('nav');
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
		//if($('#nav ul').hasClass('menu-showing')){
			$('#nav').on('click', function(event) {
				//event.preventDefault();  // Might cause problems depending on implementation
				event.stopPropagation();

				$(document).one('click', function (event) {
					if(!$(event.target).is('nav')) {
						// code to hide menus
						$('nav .menu ul').removeClass('menu-showing');
						$("#nav .menu").removeClass('shown-menu');
						$('#nav').removeClass('open-menu');
						//console.log('closing menu');
					}
				});
				
				$(window).on('resize', function() {
					if($('.menu-icon').is(':visible')){
						$('#nav').on('click', function(event) {
							event.stopPropagation();
							$(document).one('click', function (event) {
								if(!$(event.target).is('nav')) {
									// code to hide menus
									$('nav .menu ul').removeClass('menu-showing');
									$("#nav .menu").removeClass('shown-menu');
									$('#nav').removeClass('open-menu');
									//console.log('closing menu');
								}
							});
						});
					}
				});
				
				$(window).on('scroll', function() {
					//if($('.menu-icon').hasClass('open-showing')){
					if($('.menu-icon').is(':visible')){
						$('#nav.fixed-nav .menu ul').removeClass('menu-showing');
						$("#nav .menu").removeClass('shown-menu');
						$('#nav').removeClass('open-menu');
						//console.log('scrolling closing menu');
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
		//welcome rainbow text for whiney
		//*****
		$('.anim-text-flow').html(function(i, html) {
			//var chars = $.trim(html).split(" ")
			var chars = $.trim(html).split("");

			return '<span class="bounceItem"><span class="flowText">' + chars.join('</span></span><span class="bounceItem"><span class="flowText">') + '</span></span>';
		});
		//*****
		//equal height content script
		//*****
		equalContentHeight();
	});
})(jQuery);