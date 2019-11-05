/**
 * Negated character sets
 * 
 * To create a negated character set, you place a caret character (^) after 
 * the opening bracket and before the characters you do not want to match.
 * 
 * Create a single regex that matches all characters 
 * that are not a number or a vowel.
 */
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

console.log(result); //=> (9) [" ", "b", "l", "n", "d", " ", "m", "c", "."]