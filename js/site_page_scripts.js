//document.addEventListener('DOMContentLoaded', function() {
document.onreadystatechange = function () {
	//"loading" document is still loading
	//"interactive" document has finished loading. We can access DOM elements
	//"complete" document page has finished completely and fully loaded
	if (document.readyState === 'interactive') {
		
	}
}

// user agent check for mobile.
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
}

//function to equalize heights of content when needed
function equalContentHeight() {
	if( $(window).width() >= 800 ) {
		$(document).each(function(event) {
			//$(document).on('load', function() {
				if( $('.match-height').length > 0 ) {
					$('.group.match-height').each(function() {
						//var $contentHeight = 0;
						var $columns = $('.col', this);
						//var $maxHeight = Math.max.apply(Math, $columns.map(function() {
							//return $(this).outerHeight(true);
							// current // return $(this).height();
						//}).get());
						//$columns.height($maxHeight);
						//$columns.css({
							//height: $maxHeight + 'px'
						//});
						//window.console&&console.log('Equalize content height was called and ran');
						
						var highestBox = 0;
						$($columns).each(function() { 
							if($(this).height() > highestBox){ 
								//highestBox = $(this).height();
								highestBox = $(this).outerHeight(true);
							}
						});    
						$($columns).height(highestBox);
					});
				}
			//});
		});
	}
}

function checkBoxCheck() {
	//get checkbox
	var checkBox = document.getElementById('toggleTheme');
	//get Light
	var lightToggle = document.getElementById('light-toggle');
	//get Dark
	var darkToggle = document.getElementById('dark-toggle');
			
	if(checkBox.checked == true){
		$('#dark-toggle').removeClass('selected');
		$('#dark-toggle').addClass('non-selected');
		$('#light-toggle').removeClass('non-selected');
		$('#light-toggle').addClass('selected');
	} else {
		$('#light-toggle').removeClass('selected');
		$('#light-toggle').addClass('non-selected');
		$('#dark-toggle').removeClass('non-selected');
		$('#dark-toggle').addClass('selected');
	}
}

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
					'}' +
					'@media only screen and (max-width : 768px), only screen and (max-device-width : 768px){' +
					'.resp-container {' +
					'padding-top: 117%;' +
					'}' +
					'.card-front img {' +
					'max-height: 283px;' +
					'}' +
					'.badge-back-gline-wrapper img,' +
					'.badge-banners-top img,' +
					'.badge-banners-bottom img,' +
					'.badge-front img {' +
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
					'}' +
					'@media only screen and (max-width : 768px), only screen and (max-device-width : 768px){' +
					'.resp-container {' +
					'padding-top: 117%;' +
					'}' +
					'.card-front img {' +
					'max-height: 283px;' +
					'}' +
					'.badge-back-gline-wrapper img,' +
					'.badge-banners-top img,' +
					'.badge-banners-bottom img,' +
					'.badge-front img {' +
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

/* document.addEventListener("DOMContentLoaded", (event) => {
	if (document.readyState === "loading") {
		document.querySelector('body').style.visibility = 'hidden';
		document.querySelector('#kit-loader').style.visibility = 'visible';
		document.querySelector('#kit-loader').style.display = 'block';
	} else {
		document.querySelector('#kit-loader').style.visibility = 'hidden';
		document.querySelector('#kit-loader').style.display = 'none';
		document.querySelector('body').style.visibility = 'visible';
	}
});
*/

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
		//Conic-gradient rainbow button
		//*****
		const buttons = document.querySelectorAll('.button-grad-rainbow');

		buttons.forEach(button => {
			button.addEventListener('mousemove', e => {
				const x = event.offsetX;
				const y = event.offsetY;

				button.style.setProperty('--x', `${x}px`);
				button.style.setProperty('--y', `${y}px`);
			});
		});
		//*****
		//light mode/dark mode toggle
		//*****
		//var checkboxModeToggle = document.getElementById('lightToggle');
		
		//use for reaslistic slider
		//var checkboxModeToggle = document.getElementById('toggleThemeWrapper');
		
		var themeModeToggle = document.getElementById('toggleTheme');
		
		//use for reaslistic slider
		//checkboxModeToggle.addEventListener('change', () => {
			//don't need/use //document.body.classList.toggle('lightTheme');
			//$('body').toggleClass('lightTheme darkTheme');
		//});
		
		//themeModeToggle.addEventListener('change', () => {
			// not used document.body.classList.toggle('lightTheme');
			
			//$('body').toggleClass('lightTheme darkTheme');
		//});
		
		if(localStorage.getItem('lightTheme') === 'true') {
			document.body.className = 'lightTheme';
			$(themeModeToggle).prop('checked', true);
			$(themeModeToggle).attr('checked', true);
		}
		
		if(localStorage.getItem('lightTheme') === 'false') {
			document.body.className = 'darkTheme';
			$(themeModeToggle).prop('checked', false);
			$(themeModeToggle).attr('checked', false);
		}
				
		var $body = $('body');
		$(themeModeToggle).on('click', function() {
			if(!$body.hasClass('lightTheme')) {
				$($body).removeClass('darkTheme');
				$($body).addClass('lightTheme');
				localStorage.setItem('lightTheme', 'true');
			} else {
				$($body).removeClass('lightTheme');
				$($body).addClass('darkTheme');
				localStorage.setItem('lightTheme', 'false');
				//localStorage.removeItem('lightTheme');
			}
			//console.log('Toggle Theme Click');
		});
		
		checkBoxCheck();

		$('.toggle-icon').hover(function() {
			if( $('.light-toggle').hasClass('selected') ) {
				$('.light-toggle').removeClass('selected');
				$('.light-toggle').addClass('non-selected');
			} else if( $('.light-toggle').hasClass('non-selected') ){
				$('.light-toggle').removeClass('non-selected');
				$('.light-toggle').addClass('selected');
			}
			
			if( $('.dark-toggle').hasClass('selected') ) {
				$('.dark-toggle').removeClass('selected');
				$('.dark-toggle').addClass('non-selected');
			} else if( $('.dark-toggle').hasClass('non-selected') ){
				$('.dark-toggle').removeClass('non-selected');
				$('.dark-toggle').addClass('selected');
			}
		});
		
		$('#toggleTheme').click(function() {
			$('.light-toggle').toggleClass('selected non-selected');
			$('.dark-toggle').toggleClass('selected non-selected');
		});
		
		$(window).on('load', function() {
			//$('body').removeClass('lightTheme');
			//$('body').addClass('darkTheme');
			
			// old no use$("#themeCheckToggle").prop("checked", false);
			//odl no use if( ($('input:checkbox[name=toggleTheme]').is(':checked')) ) {
				
				//$('input:checkbox[name=toggleTheme]').attr('checked', false);
				//document.getElementById("toggleTheme").checked = false;
			//old no use}
			//old no use $('#textInput').prop('disabled', true);
		});
		
		//$('input[type="checkbox"]:checked').prop('checked', false);
		
		//*****
		//parallax function
		//*****
		/* function parallax(){
			var scrolled = $(window).scrollTop();
			//$('.bg').css('top',-(scrolled*0.1)+'px');
			//$('header .parallax').css( 'top', 50+(scrolled*0.1)+'%' );
			$('header .parallax').css( 'top', (scrolled*0.1)+'%' );
			$('header .parallax').css( 'opacity', 1-(scrolled*0.01)/10 );
			$('header .parallax').css( 'opacity', 1-(scrolled*0.01)/10 );
		}
		
		$(window).on('scroll', function(){
			parallax();
		}); */
		
		//*****
		//Menu Icon active class for drop down
		//*****
		const menuSelect = document.querySelectorAll('.menu-icon');
		
		$(menuSelect).on('click', function() {
			$(this).toggleClass('menuSelect');
			$('.menu').toggleClass('showMenu');
			$('.bodyBlur').toggleClass('fadeIn');
		});
		
		const menuWrapper = document.querySelectorAll('.headerArea');
		
		$('html').on('click', function() {
			// clicking outside the div element
			$('.menu-icon').removeClass('menuSelect');
			$('.menu').removeClass('showMenu');
			$('.bodyBlur').removeClass('fadeIn');
		});
		$(menuWrapper).click(function (event) {
		   event.stopPropagation();
		});
		
		//*****
		//Conic-gradient icon glow script
		//*****
		const glowIcons = document.querySelectorAll('.grad-icon-colors');

		glowIcons.forEach(glowIcon => {
			glowIcon.addEventListener('mousemove', e => {
				const x = event.offsetX;
				const y = event.offsetY;

				glowIcon.style.setProperty('--xMove', `${x}px`);
				glowIcon.style.setProperty('--yMove', `${y}px`);
			});
		});
		
		//*****
		//Hover Add Class For Mobile
		//*****
		$('.gallery-card').on('touchstart touchend', function(e) {
			e.preventDefault();
			$(this).toggleClass('activeCard');
		});
		
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
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > offset) {
				$('.progress-wrap').addClass('active-progress');
			} else {
				$('.progress-wrap').removeClass('active-progress');
			}
		});				
		$('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
		
		//*****
		//page marquee animation needed
		//*****
		var root = document.documentElement;
		var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
		var marqueeContent = document.querySelector('ul.marquee-content');
		
		root.style.setProperty('--marquee-elements', marqueeContent.children.length);
		
		for(let i=0; i < marqueeElementsDisplayed; i++) {
			marqueeContent.appendChild( marqueeContent.children[i].cloneNode(true) );
		}
		
		//*****
		//equal height content script
		//*****
		//$(window).on('load', function() {
			equalContentHeight();
		//});
	});
})(jQuery);