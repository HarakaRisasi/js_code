/*
 * Match Numbers and Letters of the Alphabet
 * For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
 * 
 * Also, it is possible to combine a range of letters and numbers 
 * in a single character set.
 * 
 *----------------------------------------------------------------------
 * let one = "Jenny8675309";
 * let regEx = /[a-z0-9]/ig;
 * 
 * console.log(one.match(regEx));
 * matches all letters and numbers in jennyStr
 * //=> (12) ["J", "e", "n", "n", "y", "8", "6", "7", "5", "3", "0", "9"]
 *----------------------------------------------------------------------
 */
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);
//=> (17) ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]