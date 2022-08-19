(function($){
	$(function(){
	
		var $cards = $('.card-wrapper');
			var $cardsClass = $('.card-wrapper, .card-shine, .card-glare');
			//var $style = $('.styles');
			$cards.on('mousemove', function(e) {
				// needed variables
				//--mx: ${a.x}%;
				//--my: ${a.y}%;
				//--tx: ${N.x}px;
				//--ty: ${N.y}px;
				//--rx: ${y.x+n.x}deg;
				//--ry: ${y.y+n.y}deg;
				//--pos: ${c.x}% ${c.y}%;
				//--posx: ${c.x}%;
				//--posy: ${c.y}%;
				//--hyp: ${Math.sqrt((a.y-50)*(a.y-50)+(a.x-50)*(a.x-50))/50};
				var $card = $(this);
				var l = e.offsetX;
				var t = e.offsetY;
				var h = $card.height();
				var w = $card.width();
				var lp = Math.abs(Math.floor(100 / w * l)-100);
				var tp = Math.abs(Math.floor(100 / h * t)-100);
				
				// pointer position in px
				var posx = e.clientX;
				var posy = e.clientY;
				// pointer position in percent
				// Do math
				var xPercent = parseInt(e.pageX / window.innerWidth * 100);
				var yPercent = parseInt(e.pageY / window.innerHeight * 100);
				//var tiltAngle = Math.atan2(e.clientX - (this.left + this.width / 2), -(e.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
				var mAngle = getcsstransform($(this));
				var tiltX = mAngle.rotateX;
				var tiltY = mAngle.rotateY;
				// get hype
				var hyp = Math.sqrt( (posy-50)*(posy-50) + (posx-50) * (posx-50) ) /50;
				
				//var bg = `background-position: ${lp}% ${tp}%;`
				//var style = `.card.active:before { ${bg} }`
				$cardsClass.removeClass('active');
				$cardsClass.addClass('active');
				//$style.html(style);
				$('.card-wrapper').attr('style', '--mx:' + xPercent + '%; --my:' + yPercent + '%; --posx:' + posy + 'px; --posy:' + posx + 'px; --tx:' + posx + 'px; --ty:' + posy + 'px; --rx:' + tiltX + 'deg; --ry:' + tiltY + 'deg; --pos:' + xPercent + '% ' +  yPercent + '%; --hyp:' + hyp + ';');
			}).on('mouseleave', function() {
				$cardsClass.removeClass('active');
			});
			
			$(".card-front").tilt({
				max: 15,
				speed: 400,
				perspective: 600,
			});var $cards = $('.card-wrapper');
			var $cardsClass = $('.card-wrapper, .card-shine, .card-glare');
			//var $style = $('.styles');
			$cards.on('mousemove', function(e) {
				// needed variables
				//--mx: ${a.x}%;
				//--my: ${a.y}%;
				//--tx: ${N.x}px;
				//--ty: ${N.y}px;
				//--rx: ${y.x+n.x}deg;
				//--ry: ${y.y+n.y}deg;
				//--pos: ${c.x}% ${c.y}%;
				//--posx: ${c.x}%;
				//--posy: ${c.y}%;
				//--hyp: ${Math.sqrt((a.y-50)*(a.y-50)+(a.x-50)*(a.x-50))/50};
				var $card = $(this);
				var l = e.offsetX;
				var t = e.offsetY;
				var h = $card.height();
				var w = $card.width();
				var lp = Math.abs(Math.floor(100 / w * l)-100);
				var tp = Math.abs(Math.floor(100 / h * t)-100);
				
				// pointer position in px
				var posx = e.clientX;
				var posy = e.clientY;
				// pointer position in percent
				// Do math
				var xPercent = parseInt(e.pageX / window.innerWidth * 100);
				var yPercent = parseInt(e.pageY / window.innerHeight * 100);
				//var tiltAngle = Math.atan2(e.clientX - (this.left + this.width / 2), -(e.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
				var mAngle = getcsstransform($(this));
				var tiltX = mAngle.rotateX;
				var tiltY = mAngle.rotateY;
				// get hype
				var hyp = Math.sqrt( (posy-50)*(posy-50) + (posx-50) * (posx-50) ) /50;
				
				//var bg = `background-position: ${lp}% ${tp}%;`
				//var style = `.card.active:before { ${bg} }`
				$cardsClass.removeClass('active');
				$cardsClass.addClass('active');
				//$style.html(style);
				$('.card-wrapper').attr('style', '--mx:' + xPercent + '%; --my:' + yPercent + '%; --posx:' + posy + 'px; --posy:' + posx + 'px; --tx:' + posx + 'px; --ty:' + posy + 'px; --rx:' + tiltX + 'deg; --ry:' + tiltY + 'deg; --pos:' + xPercent + '% ' +  yPercent + '%; --hyp:' + hyp + ';');
			}).on('mouseleave', function() {
				$cardsClass.removeClass('active');
			});
			
			$(".card-front").tilt({
				max: 15,
				speed: 400,
				perspective: 600,
			});
	
	});
})(jQuery);