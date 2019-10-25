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
/*
Use Destructuring Assignment to Assign Variables from Arrays
------------------------------------------
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); //return 1 2 5
------------------------------------------
in C-lang. i'm do next:
------------------------------------------
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

a; // => 2
b; // => 1
------------------------------------------
*/
//swap the values of a and b 
let a = 8,
    b = 6;

[a, b] = [b, a];

console.log(a);
console.log(b);

//ex.015
/*
_Rest parameters

-Destructuring array - массив не имеющий четкой структуры(динамический массив).

-Синтаксис оставшихся параметров функции позволяет 
представлять неограниченное множество аргументов в виде массива.

-Если последний именованный аргумент функции имеет префикс ..., 
он автоматически становится массивом с элементами от 0 до theArgs.length 
в соответствии с актуальным количеством аргументов, переданных в функцию.
----------------------------
function(a, b, ...theArgs) {
  // ...
}
----------------------------
----------------------------
const sum = (...args) => args.reduce((previous, current) => previous + current);

console.log(sum(1, 2, 3)); //return 6;
----------------------------
----------------------------
const [a, b, c, ...args] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(a, b); //=> 1 2
console.log(args); //=> [4, 5, 6, 7, 8, 9, 0]
----------------------------
*/
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);

console.log(arr); //=> [3, 4, 5, 6, 7, 8, 9, 10]
console.log(source); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//ex.016
/*
Use Destructuring Assignment to Pass an Object as a Function's Parameters
- In some cases, you can destructure the object in a function argument itself.

const profDate = {
    name: "Haraka",
    age: 29,
    nationality: "Russian",
    location_: "WorldNet"
};

const profUpdate = ({name, age, nationality, location_}) => {
    // do something with these variables
};
console.log(profUpdate());
*/
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({
  max,
  min
}) => (max + min) / 2.0;

console.log(stats);
console.log(half(stats));

//ex.017
/*
Create Strings using Template Literals

Шаблонными литералами называются строковые литералы, допускающие использование выражений внутри. 
С ними вы можете использовать многострочные литералы и строковую интерполяцию. 
В спецификациях до ES2015 они назывались "шаблонными строками".

Литерал — запись в исходном коде компьютерной программы, представляющая собой фиксированное значение. 
Литералами также называют представление значения некоторого типа данных.
В программировании литерал - это константа которая не имеет имени. 

$ — интерполяция строк
Интерполяция выражений
Для вставки выражений в обычные строки вам пришлось бы использовать следующий синтаксис:
-----------------------------------------------------------------------
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
-----------------------------------------------------------------------
-----------------------------------------------------------------------
let a = 5, b = 10;
let c = `Fifteen is ${a + b} and not ${2 * a + b}.`;

console.log(c); //=> Fifteen is 15 and not 20.
-----------------------------------------------------------------------
-----------------------------------------------------------------------
const person = {
    name: "Haraka",
    age: 29
};
const greeting = `Hello, my name is ${person.name}.\nI'am ${person.age} year old.`;

console.log(greeting); //=> Hello, my name is Haraka.
                       //   I'am 29 year old.
-----------------------------------------------------------------------
Метод .map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
-----------------------------------------------------------------------
let num = [2, 4, 6, 7, 8];
let x = num.map(Math.sqrt);
console.log(x); //=> [1.4142135623730951, 2, 2.449489742783178, 2.6457513110645907, 2.8284271247461903]
-----------------------------------------------------------------------
-----------------------------------------------------------------------
let num = [64, 33, 21, 54];
let x = num.map(myFunction);

function myFunction(num){
    return num * 10;
}
console.log(x); //=> [640, 330, 210, 540]
-----------------------------------------------------------------------
*/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  const resultDisplayArray = arr.map(arr => `<li class="text-warning">${arr}</li>`);
  return resultDisplayArray;
};

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//ex.018
/*
Write Concise Object Literal Declarations Using Object Property Shorthand
-------------------------------------
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
-------------------------------------
or here is the same function from above rewritten to use this new syntax.
-------------------------------------
const getMousePosition = (x, y) => ({x, y});
-------------------------------------

Литералы

Литералы используются в тексте программы для обозначения числовых значений, строк, символов или логических констант. 
Другими словами литерал представляет собой постоянное значение, у которого нет имени.
Литералы — некие фиксированные данные в программном коде.
Литералы используются для представления значений в JavaScript. 
Они являются фиксированными значениями, а не переменными. 
-------------------------------------
Литерал массива
-------------------------------------
Литерал массива — это список из нуля или более выражений, каждое из которых представляет 
элемент массива, заключенный в квадратные скобки ( [] ).
var coffees = ["French Roast", "Colombian", "Kona"];

-------------------------------------
Логический литерал
-------------------------------------
Логический (Boolean) тип имеет два литеральных значения: true и false.

-------------------------------------
Литерал целого числа
-------------------------------------
0, 117 и -345 (десятичная система счисления)
015, 0001 и -077 (восьмеричная система счисления) 
0x1123, 0x00111 и -0xF1A7 (шестнадцатеричная система счисления)
0b11, 0b0011 и -0b11 (двоичная система счисления)
Десятичный целочисленный литерал состоит из последовательности цифр без ведущего нуля.
Ведущий ноль в целочисленном литерале указывает на то, что он записан в восьмеричной системе счисления. Восьмеричные целые числа состоят только из цифр 0-7.
Ведущие символы 0x (или 0X) указывают на то, что число шестнадцатеричное. Шестнадцатеричные целые числа могут состоять из цифр 0-9 и букв a-f и A-F. 
Ведущие символы 0b (или 0B) указывают на то, что число двоичное. Двоичные числа могут включать в себя только цифры 0 и 1.

-------------------------------------
Литерал числа с плавающей точкой
-------------------------------------
Числа с плавающей точкой могут состоять из следующих частей:
Десятичное целое число, которое может иметь знак (символ "+" или "-", стоящий перед числом),
Десятичная точка ("."),
Дробная часть (другое десятичное число),
Экспонента.

-------------------------------------
Литерал объекта
-------------------------------------
Литерал объекта — это список из нуля или более пар, состоящих из имен 
свойств и связанных с ними значений, заключенный в фигурные скобки ( {} ).
var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

-------------------------------------
RegExp литерал
-------------------------------------
Литерал regexp - шаблон между слешами.
var re = /ab+c/;

-------------------------------------
Литерал строки
-------------------------------------
Строковый литерал — это ноль или более символов, заключенных в двойные ( " ) или одинарные ( ' ) кавычки. 
Строка должна быть ограничена кавычками одного типа, т.е. либо обе одинарные, либо обе двойные. 
Например:
"foo"
'bar'
"1234"
"one line \n another line"
"John's cat"
-------------------------------------
-------------------------------------
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male")); //=>{name: "Zodiac Hasbro", age: 56, gender: "male"}
-------------------------------------
*/
const createPerson = (name, age, gender) => {
  return {
      name,
      age,
      gender
  };
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); //=>{name: "Zodiac Hasbro", age: 56, gender: "male"}

//ex.019
/*
Declarative Functions with ES6

Императивный стиль:
-------------------------------------------------------
function double (arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2);
  }
  return results;
}
-------------------------------------------------------
Декларативный стиль:
-------------------------------------------------------
function double (arr) {
  return arr.map((item) => item * 2);
}
-------------------------------------------------------

Use Destructuring Assignment
-------------------------------------------------------
const person = {
    name: "Haraka",
    sayHello(){
        return `Hello! My name is ${name}.`;
    }
};
const {name, sayHello} = person;

console.log(sayHello()); //=> Hello! My name is Haraka.
-------------------------------------------------------
Use method .this
-------------------------------------------------------
const person = {
    name: "Haraka",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};

console.log(person.sayHello()); //=> Hello! My name is Haraka.
-------------------------------------------------------
*/

/*
-------------------------------------------------------
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
-------------------------------------------------------
*/
const bicycle = {
  gear: 2,
  setGear(newGear) {
      this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//ex.20
/*
-UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
-The constructor method is a special method for creating and initializing an object created with a class. 

Class declarations
------------------------------------------
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
------------------------------------------
this.name represents the instance variable while the name variable is a parameter that is in the scope of the function (constructor in this case).
With this assignment, the value of the local variable is assigned to the instance variable.

The constructor method is a special method for creating and initializing an object created with a class. 
There can only be one special method with the name "constructor" in a class. 
A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
------------------------------------------
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
        //this.targetPlanet - is a property of SpaceShuttle."SpaceShuttle.targetPlanet"
    }
}

const zeus = new SpaceShuttle('Jupiter');
console.log(zeus);
------------------------------------------
*/
class Vegetable {
  constructor(name) {
      this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); //=> 'carrot'

//ex.21
/*
Use getters and setters to Control Access to an Object

You can obtain values from an object, and set a value of a property within an object.

-Getter functions are meant to simply return (get) the value of an object's private variable to the user 
without the user directly accessing the private variable.

-Setter functions are meant to modify (set) the value of an object's private 
variable based on the value passed into the setter function. 
This change could involve calculations, or even overwriting the previous value completely.
-----------------------------------------
class Book {
    constructor(author){
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol._author); //=> anonymous

lol.writer = 'Haraka';
console.log(lol._author); //=> Haraka
-----------------------------------------
*/

//ex.031