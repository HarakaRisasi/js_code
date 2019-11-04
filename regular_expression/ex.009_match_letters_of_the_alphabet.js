/*
Match Letters of the Alphabet
-------------------------------------------
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
-------------------------------------------
*/
let quoteSample = "The quick brown fox jumps over the lazy dog.";

let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

console.log(result);
//=>
/*
(35) 
["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", 
 "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", 
 "y", "d", "o", "g"]
*/