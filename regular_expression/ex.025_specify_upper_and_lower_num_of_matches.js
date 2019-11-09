/*
Specify Upper and Lower Number of Matches

The plus sign + to look for one or more characters. 
The asterisk * to look for zero or more characters.

These are convenient but sometimes you want to match a certain range of patterns.
You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). 

You put two numbers between the curly brackets 
- for the lower and upper number of patterns.
{3,5}
-----------------
let A4 = 'aaaah';
let A2 = 'aah';
let multipleA = /a{3,5}h/g;

console.log(A4.match(multipleA)); //=> ["aaaah"]
console.log(A2.match(multipleA)); //=> null
-----------------
*/
let ohRegex = /oh{3,6} no/gi;

console.log("Ohh no".match(ohRegex)); //=> null
console.log("Ohhh no".match(ohRegex)); //=> ["Ohhh no"]
console.log("Ohhhh no".match(ohRegex)); //=> ["Ohhhh no"]
console.log("Ohhhhh no".match(ohRegex)); //=> ["Ohhhhh no"]
console.log("Ohhhhhh no".match(ohRegex)); //=> ["Ohhhhhh no"]
console.log("Ohhhhhhh no".match(ohRegex)); //=> null