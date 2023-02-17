window.navigator.userAgent;
var isMobile = false;
if(/Android|webOS|iPhone|iPad|iPod|CriOS|BlackBerry|IEMobile|OPiOS|Opera Mini/i.test(navigator.userAgent)) { var isMobile = true; }
console.log(isMobile);

//waves for mobile single frame.
//if(isMobile && ($(window).width() <= 960) ) {
if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/WebOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||  navigator.userAgent.match(/CriOS/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/OPiOS/i) || navigator.userAgent.match(/Opera Mini/i) || 'ontouchstart' in document.documentElement || window.navigator.msPointerEnabled && navigator.maxTouchPoints > 1 ) {
//if(isMobile == true || 'ontouchstart' in window || window.navigator.msPointerEnabled) {
	//if($(window).width() <= 960) {
		function waveRender() {
		var lastFrameTime = 8;
		var waves = new SineWaves({
			el: document.getElementById('waves'),
			//speed: 5,
			//ease: 'SineInOut',
			wavesWidth: '75%',
			running: false,
		  
			waves: [
				{
					//type: 'Square'
					//segmentLength: 1, // The smaller the smoother
					
					//type: 'Sawtooth'
					//segmentLength: 1,
					
					//type: 'Triangle'
					//segmentLength: 1,
				},
				{ /* small-set wave 1 */
					timeModifier: 4,
					lineWidth: 1,
					amplitude: -60,
					wavelength: 70
				},
				{ /* small-set wave 2 */
					timeModifier: 3,
					lineWidth: 1,
					amplitude: -20,
					wavelength: 25,
				},
				{ /* small-set wave 3 */
					timeModifier: 3,
					lineWidth: 1,
					amplitude: 40,
					wavelength: 40
				},
				{ /* small-set wave 4 tall */
					timeModifier: 2,
					lineWidth: 1.5,
					amplitude: -50,
					wavelength: 60
				},
				{ /* medium-set wave */
					timeModifier: 0.8,
					lineWidth: 1.8,
					amplitude: -110,
					wavelength: 120
				},
				{ /* large-set wave */
					timeModifier: 0.4,
					lineWidth: 2,
					amplitude: -80,
					wavelength: 110,
					//segmentLength: 1,
					//type: 'Sawtooth'
				}
			],
		 
			// Called on window resize
			resizeEvent: function() {
				
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				//left to right colors
				//gradient.addColorStop(0,"rgba(145, 255, 230, 1)"); /* green */
				gradient.addColorStop(0.1,"rgba(172, 201, 85, 1)"); /* teal */
				//gradient.addColorStop(0.3,"rgba(255, 194, 194, .75)"); /* pink - coral */
				gradient.addColorStop(0.3,"rgba(100, 27, 160, 1)"); /* darker orange */
				//gradient.addColorStop(0.4,"rgba(255, 138, 138, 0.75)"); /* coral */
				gradient.addColorStop(0.4,"rgba(182, 5, 215, 1)"); /* lighter orange */
				//gradient.addColorStop(0.6,"rgba(255, 221, 138, 0.75"); /* yellow */
				//gradient.addColorStop(0.8,"rgba(232, 71, 71, 0.75"); /* light red */
				gradient.addColorStop(0.8,"rgba(100, 27, 160, 1)"); /* darker orange */
				//gradient.addColorStop(1,"rgba(208, 2, 27, 1"); /* red */
				gradient.addColorStop(0.9,"rgba(172, 201, 85, 1)"); /* teal */
			
				var index = -1;
				var length = this.waves.length;
				while(++index < length){
					this.waves[index].strokeStyle = gradient;
				}
				
				// Clean Up
				index = void 0;
				length = void 0;
				gradient = void 0;
			}
		});
		waves.update();
		}
		console.log('Waves Stop Mobile');
	//}
} else {
// waves for desktop
//if(!( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
	//if($(window).width() >= 960) {
		function waveRender() {
		var waves = new SineWaves({
			el: document.getElementById('waves'),
			speed: 5,
			ease: 'SineInOut',
			wavesWidth: '75%',
		  
			waves: [
				{
					//type: 'Square'
					//segmentLength: 1, // The smaller the smoother
					
					//type: 'Sawtooth'
					//segmentLength: 1,
					
					//type: 'Triangle'
					//segmentLength: 1,
				},
				{ /* small-set wave 1 */
					timeModifier: 4,
					lineWidth: 1,
					amplitude: -60,
					wavelength: 70
				},
				{ /* small-set wave 2 */
					timeModifier: 3,
					lineWidth: 1,
					amplitude: -20,
					wavelength: 25,
				},
				{ /* small-set wave 3 */
					timeModifier: 3,
					lineWidth: 1,
					amplitude: 40,
					wavelength: 40
				},
				{ /* small-set wave 4 tall */
					timeModifier: 2,
					lineWidth: 1.5,
					amplitude: -50,
					wavelength: 60
				},
				{ /* medium-set wave */
					timeModifier: 0.8,
					lineWidth: 1.8,
					amplitude: -210,
					wavelength: 140
				},
				{ /* large-set wave */
					timeModifier: 0.4,
					lineWidth: 2,
					amplitude: -160,
					wavelength: 180,
					//segmentLength: 1,
					//type: 'Sawtooth'
				}
			],
		 
			// Called on window resize
			resizeEvent: function() {
				
				var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				//left to right colors
				//gradient.addColorStop(0,"rgba(145, 255, 230, 1)"); /* green */
				gradient.addColorStop(0.1,"rgba(172, 201, 85, 1)"); /* teal */
				//gradient.addColorStop(0.3,"rgba(255, 194, 194, .75)"); /* pink - coral */
				gradient.addColorStop(0.3,"rgba(100, 27, 160, 1)"); /* darker orange */
				//gradient.addColorStop(0.4,"rgba(255, 138, 138, 0.75)"); /* coral */
				gradient.addColorStop(0.4,"rgba(182, 5, 215, 1)"); /* lighter orange */
				//gradient.addColorStop(0.6,"rgba(255, 221, 138, 0.75"); /* yellow */
				//gradient.addColorStop(0.8,"rgba(232, 71, 71, 0.75"); /* light red */
				gradient.addColorStop(0.8,"rgba(100, 27, 160, 1)"); /* darker orange */
				//gradient.addColorStop(1,"rgba(208, 2, 27, 1"); /* red */
				gradient.addColorStop(0.9,"rgba(172, 201, 85, 1)"); /* teal */
			
				var index = -1;
				var length = this.waves.length;
				while(++index < length){
					this.waves[index].strokeStyle = gradient;
				}
				//waves.update();
				
				// Clean Up
				index = void 0;
				length = void 0;
				gradient = void 0;
			}
		});
		}
		console.log('Waves Desktop Version');
	}
//}