/*
Match Characters that Occur Zero or More Times

The character to do this is the asterisk or star: *.
--------------------------------
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";

let regEx = \go*\

console.log(soccerWord.match(regEx)); //=> ["goooooooo"]
console.log(gPhrase.match(regEx)); //=> ["g"]
console.log(oPhrase.match(regEx)); //=> null
--------------------------------
 */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /A+a*/;
let result = chewieQuote.match(chewieRegex);

console.log(result); //=> ["Aaaaaaaaaaaaaaaa"]