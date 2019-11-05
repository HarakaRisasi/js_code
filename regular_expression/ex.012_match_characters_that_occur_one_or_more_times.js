/**
 * Match Characters that Occur One or More Times
 * 
 * Sometimes, you need to match a character (or group of characters) 
 * that appears one or more times in a row. 
 * This means it occurs at least once, and may be repeated.
 */
let difficultSpelling = "Mississisppi";
let myRegex = /s+s/gi;
let result = difficultSpelling.match(myRegex);

console.log(result); //=> (2) ["ss", "ss"]