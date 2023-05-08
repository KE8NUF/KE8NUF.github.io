'use strict';

const circleCount = 25;
const circlePropCount = 15;
const circlePropsLength = circleCount * circlePropCount;
const baseSpeed = 10;
const rangeSpeed = 7;
const baseTTL = 150;
const rangeTTL = 200;
const baseRadius = 125;
const rangeRadius = 200;
const rangeHue = 60;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;
const backgroundColor = 'hsla(227, 39%, 10%, 1)';
//const backgroundColor = 'hsla(217, 13%, 81%, 1)';

let container;
let canvas;
let ctx;
let circles;
let circleProps;
let simplex;
let baseHue;

let cloneWrapper;
let containerTwo;
let cloneContext;
let originalContext;
let imageData;

function setup() {
	createCanvas();
	resize();
	initCircles();
	draw();
	//handleClone();
}

function initCircles() {
	circleProps = new Float32Array(circlePropsLength);
	simplex = new SimplexNoise();
	baseHue = 220;

	let i;

	for (i = 0; i < circlePropsLength; i += circlePropCount) {
		initCircle(i);
	}
}

function initCircle(i) {
	let x, y, n, t, speed, vx, vy, life, ttl, radius, hue;

	x = rand(canvas.a.width);
	y = rand(canvas.a.height);
	n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff);
	t = rand(TAU);
	speed = baseSpeed + rand(rangeSpeed);
	vx = speed * cos(t);
	vy = speed * sin(t);
	life = 0;
	ttl = baseTTL + rand(rangeTTL);
	radius = baseRadius + rand(rangeRadius);
	hue = baseHue + n * rangeHue;

	circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
}

function updateCircles() {
	let i;

	baseHue++;

	for (i = 0; i < circlePropsLength; i += circlePropCount) {
		updateCircle(i);
	}
}

function updateCircle(i) {
	let i2=1+i, i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i;
	let x, y, vx, vy, life, ttl, radius, hue;

	x = circleProps[i];
	y = circleProps[i2];
	vx = circleProps[i3];
	vy = circleProps[i4];
	life = circleProps[i5];
	ttl = circleProps[i6];
	radius = circleProps[i7];
	hue = circleProps[i8];

	drawCircle(x, y, life, ttl, radius, hue);

	life++;

	circleProps[i] = x + vx;
	circleProps[i2] = y + vy;
	circleProps[i5] = life;

	(checkBounds(x, y, radius) || life > ttl) && initCircle(i);
}

function drawCircle(x, y, life, ttl, radius, hue) {
	ctx.a.save();
	ctx.a.fillStyle = `hsla( ${hue}, 60%, 30%, ${fadeInOut(life, ttl)} )`;
	ctx.a.beginPath();
	ctx.a.arc(x,y, radius, 0, TAU);
	ctx.a.fill();
	ctx.a.closePath();
	ctx.a.restore();
}

function checkBounds(x, y, radius) {
	return (
		x < -radius ||
		x > canvas.a.width + radius ||
		y < -radius ||
		y > canvas.a.height + radius
	);
}

function createCanvas() {
	container = document.querySelector('.magic-coloring');
	containerTwo = document.querySelector('.magic-shadow');
	
	//container = document.querySelectorAll('.magic-coloring .magic-shadow');
	
	//const containerNames = ['.magic-coloring', '.magic-shadow'];
	//let container = [];
	
	canvas = {
		a: document.createElement('canvas'),
		b: document.createElement('canvas')
	};
	
	canvas.b.style = `
		position: absolute;
		top: 50%;
		left: 50%;
		width: 105%;
		height: 190%;
		transform: translate(-50%, -50%);
		z-index: -5;
		opacity: .9;
		-webkit-backdrop-filter: blur(65px);
		backdrop-filter: blur(65px);
		
	`;
	
	canvas.a.style = `
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		z-index: -8;
		opacity: 1;
		border-radius: 3em;
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
	`;
	
	//containerNames.forEach( (containerName) => container.append(canvas.b) );
	container.appendChild(canvas.b);
	containerTwo.appendChild(canvas.a);
	
	ctx = {
		a: canvas.a.getContext('2d'),
		b: canvas.b.getContext('2d')
	};
}

function resize() {
	const { innerWidth, innerHeight } = window;
	
	canvas.a.width = innerWidth;
	canvas.a.height = innerHeight;

	ctx.a.drawImage(canvas.b, 0, 0);

	canvas.b.width = innerWidth;
	canvas.b.height = innerHeight;
  
	ctx.b.drawImage(canvas.a, 0, 0);
}

function render() {
	ctx.b.save();
	ctx.b.filter = 'blur(65px)';
	ctx.b.drawImage(canvas.a, 0, 0);
	ctx.b.restore();
}

function draw() {
	ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
	ctx.b.fillStyle = backgroundColor;
	ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
	updateCircles();
	render();
	window.requestAnimationFrame(draw);
}

/* 
function handleClone() {
	cloneWrapper = $('.magic-coloring canvas').clone();
	
	originalContext = $('.magic-coloring canvas')[0].getContext('2d');
	imageData = originalContext.getImageData(0, 0, 200, 200);
	cloneContext = $('.magic-coloring canvas')[0].getContext('2d');
	cloneContext.putImageData(imageData, 0, 0);
	containerTwo.append(cloneWrapper);
}
*/

window.addEventListener('load', setup);
window.addEventListener('resize', resize);