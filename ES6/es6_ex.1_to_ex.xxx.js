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


//ex.026