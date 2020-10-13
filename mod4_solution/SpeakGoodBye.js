(function (window) { 

	var byeSpeaker = {}; 

	byeSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
	}; 

	window.speak = byeSpeaker.speak;
	window.byeSpeaker = byeSpeaker;

	var speakWord = "Good Bye";

})(window);