/*
Match Non-Whitespace Characters

Search for everything except whitespace.
Search for non-whitespace using \S
------------------------------------------------------
let whiteSpace = 'Whitespace. Whitespace everywhere!';
let nonSpaceRegex = /\S/g;

console.log(whiteSpace.match(nonSpaceRegex));
//=>
(32) ["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", ".", "W", "h", 
      "i", "t", "e", "s", "p", "a", "c", "e", "e", "v", "e", "r", 
      "y", "w", "h", "e", "r", "e", "!"]
------------------------------------------------------
*/
let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

console.log(result);
/*
//=>
(38) ["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", "i", "s", "i", 
      "m", "p", "o", "r", "t", "a", "n", "t", "i", "n", "s", "e", "p", 
      "a", "r", "a", "t", "i", "n", "g", "w", "o", "r", "d", "s"]
*/