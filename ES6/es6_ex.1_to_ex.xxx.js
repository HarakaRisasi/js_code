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

//ex.010
/*
"_es6"/ 
--------------------------------
let b = [1, 3, 5, 6];
let a = [...b] - assigned to "a" all values "b";
--------------------------------
--------------------------------
function max(...value) { -- it's all arguments that w'll be give in a function
  // ...
}
max(1,2,3)
--------------------------------

--------------------------------
let arr = [1, 3, 5, 3];
const min_max = Math.max(...arr);

console.log(min_max); //return 5
--------------------------------
*/
const ARR1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...ARR1];

console.log(arr2[2]); //return MAR;

//ex.011
/*
Use Destructuring Assignment
Синтаксис деструктурирующего присваивания в выражениях 
JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса.

Одной из ключевых возможностей использования деструктурирующего присваивания 
является чтение структуры данных одним оператором, хотя помимо 
этого вы можете найти множество других применений в приведённых ниже примерах.
----------------------------------------
//"_es5"/
const user = {
    name : "Haraka",
    age : 29
};
const new_name = user.name;
const new_age = user.age;

console.log(new_name); //return Haraka
console.log(new_age); //return 29
----------------------------------------
----------------------------------------
var foo = ["one", "two", "three"];

// без деструктурирования
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// с деструктурированием
var [one, two, three] = foo;
----------------------------------------
Возврат нескольких значений
----------------------------------------
function f() {
  return [1, 2];
}
----------------------------------------
----------------------------------------
//"_es6"/
const user = {
    name: "Haraka",
    age: 29
};
const {name, age} = user;

let any = age;

console.log(any);
----------------------------------------
*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {
  today,
  tomorrow
} = HIGH_TEMPERATURES;

console.log(yesterday) //return not defined
console.log(today); //return 77
console.log(tomorrow); //return 80

//ex.012
/*
Use Destructuring Assignment to Assign Variables from Objects
--------------------------------------------
const user = {
    name: "Haraka",
    age: 29
};

//given new variable names in the assignment
const {name: userName, age: userAge} = user;

console.log(userAge); //return 29;
--------------------------------------------
*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {
  today: highToday,
  tomorrow: highTomorrow
} = HIGH_TEMPERATURES;

// console.log(yesterday) //return not defined
console.log(highToday); //return 77
console.log(highTomorrow); //return 80

//ex.013
/*
Here's how to extract the values of object properties and assign them to variables with the same name:
--------------------------------
const user = {
    Haraka: {
        age: 29,
        message: "HelloWorld!"
    }
};
--------------------------------
Assign an object properties' values to variables with different names:
--------------------------------
const {
    Haraka: {
        age: myNewAge,
        message: myNewMessage
    }
} = user;
--------------------------------
--------------------------------
const har = {
    myNewAge,
    myNewMessage
};

console.log(har); //return {myNewAge: 29, myNewMessage: "HelloWorld!"}
--------------------------------
*/
const LOCAL_FORECAST = {
  yesterday: {
      low: 61,
      high: 75
  },
  today: {
      low: 64,
      high: 77
  },
  tomorrow: {
      low: 68,
      high: 80
  }
};

const {
  yesterday: {
      low: lowYesterday,
      high: highYesterday
  },
  today: {
      low: lowToday,
      high: highToday
  },
  tomorrow: {
      low: lowTomorrow,
      high: highTomorrow
  }
} = LOCAL_FORECAST;

console.log(lowToday);
console.log(highToday);

//ex.014

//ex.026