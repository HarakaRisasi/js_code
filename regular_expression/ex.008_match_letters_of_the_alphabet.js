/*
Match Single Character with Multiple Possibilities

You can search for a literal pattern with some flexibility with character classes. 
Character classes allow you to define a group of characters 
you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". 
You can create the regex /b[aiu]g/ to do this. 
The [aiu] is the character class that will only match 
the characters "a", "i", or "u".
-------------------------------------------
let one = "big";
let two = "bag";
let three = "bug";
let four = "bog";

let regEx = /b[iau]g/;

console.log(one.match(regEx)); //=> "big"
console.log(two.match(regEx)); //=> "bag"
console.log(three.match(regEx)); //=> "bug"
console.log(four.match(regEx));  //=> null
-------------------------------------------
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex)

console.log(result); 
//=>
/*
(25) 
["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", 
 "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]
*/
