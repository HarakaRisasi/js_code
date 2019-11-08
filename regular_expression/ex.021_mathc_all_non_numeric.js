/*
The shortcut to look for non-digit characters is \D. 
This is equal to the character class [^0-9], which looks for a single 
character that is not a number between zero and nine.
*/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D+/g;
let result = movieName.match(noNumRegex);

console.log(result); //=> 17 - non-numeric_characters || 1 - [": A Space Odyssey"]