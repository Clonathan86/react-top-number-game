var red = '#F4595B';
var blue = '#00aeff';
var green = '#4fad4c';
var yellow = '#f4b942';

var startSound = document.getElementById("start");
var songSound = document.getElementById("song");
var bleepSound = document.getElementById("bleep");
var gameOverSound = document.getElementById("gameOver");

var random = function (min, max) {
    if (arguments.length === 1) {
		max = min;
		min = 0;
	}
	var r = Math.random();
	return Math.floor(r * (max - min) + min);
};

var clone = function (obj) {
	var newObj = {};
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

var randomColor = function () {
	var color =  random(0, 4);
	if(color === 0){
		return green;
	}else if(color === 1){
		return blue;
	}else if(color === 2){
		return yellow;
	}
	return red;
};

var playStartSound = function(){
	startSound.play();
}

var playSongSound = function(){
	songSound.play();
}

var pauseSongSound = function(){
	songSound.pause();
}

var playBleepSound = function(){
	bleepSound.play();
}

var playGameOverSound = function(){
	gameOverSound.play();
}

module.exports = {
	random: random,
	randomColor: randomColor,
	clone: clone,
	playStartSound: playStartSound,
	playSongSound: playSongSound,
	pauseSongSound: pauseSongSound,
	playBleepSound: playBleepSound,
	playGameOverSound: playGameOverSound
};
