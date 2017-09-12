// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/


/* the function is wrapped in an IIFE (Immediately Invoked Function Expression)
   so that it will execute on its own */
(function(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	// for loop goes through the elements in the names array
	for (var i = 0; i < names.length; i++) {
	  // first letter of the array is retreived and made lowercase for comparison reasons
	  var firstLetter = names[i].charAt(0).toLowerCase();
	  /* if the first letter is a J, then print "Good Bye " + name. Otherwise, print
	     "Hello " + name */
	  if (firstLetter === 'j') {
	    byeSpeaker.speak(names[i]);
	  } else {
	    helloSpeaker.speak(names[i]);
	  }
	}
})();