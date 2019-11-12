/*
Sometimes the patterns you want to search for may have parts of 
it that may or may not exist. 
However, it may be important to check for them nonetheless.
--------------------------------------------------
let american = "color";
let british = "colour";
let regEx = /colou?r/;

console.log(american.match(regEx)); //=> ["color"]
console.log(british.match(regEx)); //=> ["colour"]
--------------------------------------------------
*/
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

console.log(result); //=> true