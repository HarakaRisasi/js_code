/*
Match Anything with Wildcard Period
The wildcard character . will match any one character. 
The wildcard is also called dot and period. 
You can use the wildcard character just like any other character in the regex. 
For example, if you wanted to match "hug", "huh", "hut", and "hum", 
you can use the regex /hu./ to match all four words.
----------------------------
let one = "i'll hum a song";
let two = "Bear hug";
let regEx = /hu./;

console.log(regEx.test(two)); //=> true
console.log(regEx.test(one)); //=> true
----------------------------
*/
//"run", "sun", "fun", "pun", "nun", and "bun"
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);