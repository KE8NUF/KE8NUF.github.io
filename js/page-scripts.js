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
		//iframe async loading script to allow page render
		//*****
		/* function preLoadFrames() {
			document.getElementById('gh-media-header').innerHTML = '<iframe src="https://www.ohio.com/section/default-header/?t=UClick" width="100%" height="150" style="border:0px; padding:0px; margin:0px; display:block; overflow: hidden; width:100%!important;" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen sandbox="allow-scripts allow-popups allow-forms allow-top-navigation"></iframe>';
			document.getElementById('gh-media-footer').innerHTML = '<iframe src="https://www.ohio.com/section/default-footer/?t=UClick" width="100%" height="640" style="border:0px; padding:0px; margin:0px; display:block; overflow: hidden; width:100%!important; margin-top: -175px;" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen sandbox="allow-scripts allow-popups allow-forms allow-top-navigation"></iframe>';
			//clearTimeout(preLoadFrames);
		}
		$(window).on('load', function() {
			//setTimeout(preLoadFrames, 100);
			preLoadFrames();
		}); */
		
		equalContentHeight();
		
		//sticky navigation
		/*
		* Dynamic Top Menu Positioning
		*/
		$.fn.visible = function(partial) {
			var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
			
			return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
		}

		var num = 250; //number of pixels before modifying styles

		$(window).on('scroll load', function (event) {
			$('#nav').each(function(i, el) {
				var el = $(el);
				//if (el.visible(true)) {
					if ($(window).scrollTop() > num) {
						if(!$('#nav').hasClass('sticky')){
							//$('#nav').addClass('sticky');
							el.addClass('slide-in');
							el.addClass('sticky');
							$('.desktop-menu-logo, .desktop-menu-logo a').addClass('active-visible');
							$('.mobile-menu-logo, .mobile-menu-logo a').addClass('active-visible');
						}
					//}
				} else {
					//$('#nav').removeClass('sticky');
					el.removeClass('slide-in');
					el.removeClass('sticky');
					$('.desktop-menu-logo, .desktop-menu-logo a').removeClass('active-visible');
					$('.mobile-menu-logo, .mobile-menu-logo a').removeClass('active-visible');
				}
			});
		});
		
		var win = $(window);
		var allMods = $('#nav');
		
		//return to top
		$(window).scroll(function() {
			if ($(this).scrollTop()) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		
		$('#nav-menu-toggle').on('click', function() {
			$('#nav ul').slideToggle('fast');
		});
		
		if($('#nav-menu-toggle').is(':visible')){
			$('#nav').on('click', function(event) {
				//event.preventDefault();  // Might cause problems depending on implementation
				event.stopPropagation();

				$(document).one('click', function (event) {
					if(!$(event.target).is('#nav')) {
						// code to hide menus
						$('#nav ul').slideUp('fast');
					}
				});
			});
		}
		
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

		$('#toTop').click(function () {
		   //1 second of animation time
		   //html works for FFX but not Chrome
		   //body works for Chrome but not FFX
		   //This strange selector seems to work universally
		   $('html, body').animate({scrollTop: 0}, 600);
		});
		
		//search form placeholder text
		$('.search').find('input[type=text]').each(function(ev) {
			if(!$(this).val()) {
				$(this).attr('placeholder', 'Search Site');
			}
		});
		
		//start tower blink css animation creation
		const $tower = document.querySelector('#radio-bulb');

		let debounce = false;
		$tower.addEventListener('click', () => {
			if (debounce) return;
			debounce = true;
			buttonAnimate();
			createWave();
		});

		const buttonAnimate = () => {
			$tower.classList.add('clicked');
			setTimeout(() => {
				$tower.classList.remove('clicked');
				debounce = false;
			}, 700);
		};

		const createWave = () => {
			const waveTower = document.createElement('div');
			const waveContainer = document.querySelector('#radio-tower-wrapper');
			waveTower.classList.add('wave-tower');
			//document.body.appendChild(waveTower);
			waveContainer.appendChild(waveTower);
			setTimeout(() => waveTower.remove(), 7000);
		};

		let clicks = 0;
		  
		function addClick() {
			clicks = clicks + 1;
			document.querySelector('#radio-bulb').textContent = clicks;
		}
		  
		// Simulate click function
		function clickButtonTower() {
			click_event = new CustomEvent('click');
			btn_element = document.querySelector('#radio-bulb');
			btn_element.dispatchEvent(click_event);
		}
		  
		// Simulate a click every second
		setInterval(clickButtonTower, 2500);
		
	});
})(jQuery);