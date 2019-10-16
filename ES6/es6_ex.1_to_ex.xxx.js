/*
ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features.
The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. 
This new version of the language adds some powerful features that will be covered in this section of challenges, including:
-Arrow functions
-Classes
-Modules
-Promises
-Generators
-let and const
Note
Not all browsers support ES6 features. If you use ES6 in your own projects, 
you may need to use a program (transpiler) to convert your ES6 code into ES5 until browsers support ES6.
*/

//ex.001
/*Differences Between the var and let Keywords
let camper = "Haraka";
let camper = "Div"; //throws an error
//So unlike var, when using let, a variable with the same name can only be declared once.

console.log(camper);
*/
let catName;
let quote;

function catTalk() {
    catName = "Oliver";
    quote = catName + " says Meow!";

    return quote;
}

console.log(catTalk());

//ex.002
/*
Compare Scopes of the var and let Keywords
 When you declare a variable with the let keyword inside a block, statement, or expression, 
 its scope is limited to that block, statement, or expression.
*/
/*
var printNumTwo;
//i - is declared globally.
for(var i = 0; i < 5; i++){
  if(i === 2){
    printNumTwo = function(){
      return i;
    };
  }
}
console.log(printNumTwo()); //return 3


let printNumTwo;
//let i - is declared locally
//let i - declared only for loop statement.
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); //return 2
*/
function checkScope() {
    let i = "function scope";
    if (false) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
};
  
console.log(checkScope());

//ex.003
//You should always name variables you don't want to reassign using the const keyword.
//when naming constants is to use all uppercase letters,with words separated by an underscore.
function printManyTimes(str) {

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}

console.log(printManyTimes("freeCodeCamp"));   

//ex.004
/*
const s = [5, 6, 7];
//s = [1, 2, 3];
//console.log(s); //throws error

s[2] = 45;
console.log(s); //[5, 6, 45]
*/
const s = [5, 7, 2];

function editInPlace() {
    s[0] = 2, s[1] = 5, s[2] = 7;
    return s;
}
console.log(editInPlace());
//ex.026