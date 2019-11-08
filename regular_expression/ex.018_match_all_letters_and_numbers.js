/*
The closest character class in JavaScript to match the alphabet is \w. 
This shortcut is equal to [A-Za-z0-9_]. 
This character class matches upper and lowercase letters plus numbers. 
Note, this character class also includes the underscore character (_).
------------------------------------------------------------
let numbers = '42';
let varNames = 'important_var';

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;

console.log(numbers.match(longHand)); //=> "42"
console.log(numbers.match(shortHand)); //=> "42"
console.log(varNames.match(longHand)); //=> "important_var"
console.log(varNames.match(shortHand)); //=> "important_var"
------------------------------------------------------------

Используйте класс сокращенных символов \\ w для подсчета количества 
буквенно-цифровых символов в различных кавычках и строках.
*/
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result); //=> 31