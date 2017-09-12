/* initialization and attribute definition of the helloSpeaker object, 
   and execution of its respective function, which prints "Hello " + name 
   to the window */
   

/* the 'helloSpeaker' object, which will contain the 'speak' method and will be
   exposed to the global context, is created here */
var helloSpeaker = new Object();
/* the function is wrapped in an IIFE (Immediately Invoked Function Expression)
   so that it will execute on its own */
(function(window){
	var speakWord = "Hello";
	/* the 'speak' function for names not starting with a 'J' or 'j' is attached
	   to the helloSpeaker object */
	helloSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}
	// the helloSpeaker object is exposed to the global context
	window.helloSpeaker = helloSpeaker;
})(window);
