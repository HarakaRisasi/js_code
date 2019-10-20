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
const S = [5, 7, 2];

function editInPlace() {
    S[0] = 2, S[1] = 5, S[2] = 7;
    return S;
}
console.log(editInPlace());

//ex.005
/*
Object.freeze - prevent object mutation.
You can no longer add, update, or delete properties from it.
-------------------------------------------
let obj = {
  name: "Haraka",
  review: "Awesome"
};

Object.freeze(obj);

obj.name = "hello";
obj.newProp = "Test";

//with Object.freeze(obj);
console.log(obj); //{name: "Haraka", review: "Awesome"}
//without Object.freeze(obj);
console.log(obj); //{name: "hello", review: "Awesome", newProp: "Test"}
-------------------------------------------
*/

/*
!!!"try..catch"
*/
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
    return MATH_CONSTANTS.PI;
}

console.log(freezeObj());

//ex.006
/*
arrow function syntax:
-------------------------------
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
-------------------------------
When there is no function body, and only a return value, arrow function syntax allows 
you to omit the keyword return as well as the brackets surrounding the code.
-------------------------------
const myFunc = () => "value"
-------------------------------
This code will still return value by default.

instead
-------------------------------
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
-------------------------------
*/
const magic = () => new Date();
console.log(magic);

//ex.007
const myConcat = (arr1, arr2) => arr1.concat(arr2);
//Метод concat() объединяет текст из двух или более строк и возвращает новую строку.
console.log(myConcat([1, 2], [3, 4, 5]));

//ex.008
//Setting default arguments with arrow functions.
const increment = (number = 1, value = 1) => number + value;
//set default arguments if both or one of them not will be pass on a function

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

//ex.009
/*
const arg = (...arguments) => "You have " + arguments.length + " arguments.";
    ... — оператор расширения
    ----------------------------------------------------
    let mid = [3, 4];
    let betta = [1, 2, ...mid, 5, 6]
    console.log(betta); //return [1, 2, 3, 4, 5, 6]
    ----------------------------------------------------
console.log(arg("0", 1, [2], null)); //return "You have 4 arguments."
console.log(arg("string", null, [1, 2, 3, 4], {}, 1231)); //return "You have 5 arguments."
*/
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); //return 6;

//ex.026