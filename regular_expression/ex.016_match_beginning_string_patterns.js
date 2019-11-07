/*
Match Beginning String Patterns

caret character (^) inside a character set to create a negated character 
set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, 
the caret is used to search for patterns at the beginning of strings.
----------------------------------------------
let text = "Ricky is first and can be found.";
let regEx = /^Ricky/gi;

console.log(text.match(regEx)); //=> [Ricky]
----------------------------------------------
*/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal); //=> true