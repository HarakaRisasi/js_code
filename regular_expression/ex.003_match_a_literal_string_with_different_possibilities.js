/*
You can also search for more than just two patterns. 
You can do this by adding more patterns with more OR operators separating them,like 
--------------
/yes|no|maybe/
--------------
--------------
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let search = /Haraka|is|hiding/;
let regEx = search.test(waldoIsHiding);

console.log(regEx); //=> true
--------------
*/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result); //=> true