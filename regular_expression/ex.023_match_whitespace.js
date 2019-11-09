/*
You can search for whitespace using \s, which is a lowercase s.
------------------------------------------------------
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;

console.log(whiteSpace.match(spaceRegex)); //=> (2) [" ", " "]
------------------------------------------------------
 */
let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

console.log(result); //=> (5) [" ", " ", " ", " ", " "]