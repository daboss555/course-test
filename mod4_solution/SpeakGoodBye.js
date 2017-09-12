/* initialization and attribute definition of the byeSpeaker object, 
   and execution of its respective function, which prints "Hello " + name 
   to the window */


/* the 'byeSpeaker' object, which will contain the 'speak' method and will be
   exposed to the global context, is created here */
var byeSpeaker = new Object();
/* the function is wrapped in an IIFE (Immediately Invoked Function Expression)
   so that it will execute on its own */
(function(window){
	var speakWord = "Good Bye";
	/* the 'speak' function for names starting with a 'J' or 'j' is attached
	   to the byeSpeaker object */
	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}
	// the byeSpeaker object is exposed to the global context
	window.byeSpeaker = byeSpeaker;
})(window);

