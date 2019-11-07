/*
Match Ending String Patterns

There is also a way to search for patterns at the end of strings.
You can search the end of strings 
using the dollar sign character $ at the end of the regex.
----------------------------------------------
let theEnding = "This is a never ending story";
let regEx = /story$/;
let result = theEnding.match(regEx); //=> true

console.log(result); //=> "story"
----------------------------------------------
----------------------------------------------
let caboose = "The last car on a train is the caboose";
let lastRegex = /\w+$/gi; // Change this line
let result = caboose.match(lastRegex);

console.log(result); //=> ["caboose"]
----------------------------------------------
*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

console.log(result); //=> "caboose"