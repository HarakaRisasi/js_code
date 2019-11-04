/*
Find More Than the First Match
g - глобальное сопоставление
-----------------------------------------
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); //=> ["Repeat", "Repeat", "Repeat"]
-----------------------------------------
*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

console.log(result); //=> ["Twinkle", "twinkle"]