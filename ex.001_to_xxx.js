//ex.001
/*Seven different data types is JS
  1.undefined
  2.null
  3.boolean
  4.string
  5.symbol
  6.number
  7.object
*/

//ex.002
var ourName;
var myName;

//ex.003
var a;
var b = 2;

a = 7;
b = a;

//ex.004
var a = 9;

//ex.005
var a;
var b;
var c;

a = 5;
b = 10;
c = "I am a";

//ex.006
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//ex.007
var sum = 10 + 0;
sum += 10;

//ex.008
var difference = 45 - 33;

//ex.009
var product = 8 * 10

//ex.010
var quotient = 66 / 33;

//ex.011
var myVar = 87;
myVar++;

//ex.012
var myVar = 87;
myVar--;

//ex.013
var ourDecimal = 5.7;
var myDecimal = 5.7;

//ex.014
var product = 2.0 * 2.5;

//ex.015
var quotient = 4.4 / 2.0;

//ex.016
/*Reminder:
    5 % 2 = 1 
  because
    5 / 2 = 2
    2 * 2 = 4
    5 - 4 = 1
  Note
  The remainder operator is sometimes incorrectly referred to 
  as the "modulus" operator. It is very similar to modulus, 
  but does not work properly with negative numbers.
*/

var reminder;
reminder = 11 % 3;

//ex.017
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

//ex.018
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//ex.019
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//ex.020
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

//ex.021
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Hello";
var myLastName = "World";

//ex.022
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//ex.023
/*doubleQuoteStr = "This is a string"; 
  singleQuoteStr = 'This is also a string';

  conversation = 'Finn exclaims to Jake, "Algebraic!"';

  goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
  badStr = 'Finn responds, "Let's go!"'; // Throws an error
*/

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//ex.024
/*FirstLine
	    \SecondLine
      ThirdLine
    */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//ex.025
var myStr = "This is the start. " + "This is the end.";

//ex.026
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

//ex.027
var myName = "Haraka";
var myStr = "My name is " + myName + " and I am well!";

//ex.028
var someAdjective = "only half the long road in life Human that taked is that way";
var myStr = "Learning to code is ";
myStr += someAdjective;

//ex.029
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

//ex.030
//Bracket notation is a way to get a character at a specific index within a string.
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

//the first character at index 0 is "L"

//ex.031
/*The only way to change myStr would be to assign it with a new string, like this:
	    var myStr = "Bob";
	    myStr = "Job";
    */

var myStr = "Jello World";

myStr = "Hello World";

//ex.032
var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];

//ex.033
var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];

//ex.034
var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//ex.035
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = myNoun + "," + myAdjective + "," + myVerb + "," + myAdverb;

    return result;
}

wordBlanks("dog", "big", "ran", "quickly");

//ex.036
var myArray = ["Hello", 13];

//ex.037
/*Nested array(multi-dimensional array).
  One way to think of a multi-dimensional array, is as an array of arrays. 
  When you use brackets to access your array, the first set of brackets 
  refers to the entries in the outer-most (the first level) array, and each 
  additional pair of brackets refers to the next level of entries inside.

  input:
  var arr = [1,2,3],[4,5,6],[7,8,9],[[10,11,12], 14]]

  output:
  arr[3];           //[[10,11,12],14]
  arr[3][0];        //[10,11,12]
  arr[3][1];        //[14]
  arr[3][0][1];     //[11]      
*/

var myArray = [
    ["apple", 42],
    ["sony", 180]
];

//ex.038
var myData = 0;
var myArray = [50, 60, 70];
myData = myArray[0];

//ex.039
var myArray = [18, 64, 99];
myArray[0] = 45;

//ex.040
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];
var myData = myArray[2][1]; //myData = 8

//ex.041
//Manipulate Arrays .push()
var myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.push(["dog", 3]);
//Return [["John", 23], ["cat", 2], ["dog", 3]];

//ex.042
//Manipulate Arrays .pop()
var myArray = [
    ["John", 23],
    ["cat", 2]
];
var removedFromMyArray = myArray.pop();
window.alert(removedFromMyArray); // Returns ["cat", 2]
console.log(removedFromMyArray); // Returns ["cat", 2]

//ex.043
//Manipulate Arrays .shift()
var myArray = [
    ["John", 23],
    ["dog", 3]
];
var removedFromMyArray = myArray.shift();
// Returns ["John", 23]

//ex.044
//Manipulate Arrays .unshift()
var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift(); //return ["John", 23];

myArray.unshift(["Paul", 35]); //return [["Paul", 35],["John", 23]])

//ex.045
//There should be at least 5 sub-arrays in the list.
var myList = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5]
];

//ex.046
/*function - is a reusable parts of code
    function functionName() {
        console.log("Hello World");
    }
    functionName(); //call function
*/

function reusableFunction() {
    console.log("Hi World")
}

reusableFunction();

//ex.046
/*argument - it's actual values thet are input("or passed") into function
    function testFun(param1, param2) {
        console.log(param1, param2);
    }

    testFun("Hello", "World");}
*/

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(1, 2);

//ex.047
var myGlobal = 10;
var oopsGlobal;

function fun1() {
    oopsGlobal = myGlobal / 2;
    console.log(oopsGlobal);
}

fun1();

//ex.048
function myLocalScope() {
    var myVar;
}

//ex.049
function myOutfit() {
    var outerWear = "sweater";
    console.log(outerWear);
}
myOutfit();

//ex.050
/*We can pass values into a function with arguments. 
  You can use a return statement to send a value back out of a function.

    function plusThree(num) {
        return num + 3;
    }
    
    var answer = plusThree(5); // 8
*/

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

//ex.051
//undefined return

var sum = 0;

function addFive(num) {
    sum += 5;
    //without return;
}
console.log(addFive()); //return undefined

//ex.052
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

console.log(processed);

//ex.053
function nextInLine(arr, item) {
    //console.log("before" + JSON.stringify(arr));
    arr.push(item);
    //console.log("after" + JSON.stringify(arr));            
    var temp = arr.shift();
    return temp;
}

var testArr = [1, 2, 3, 4, 5];
/*Метод JSON.stringify(student) берёт объект и преобразует его в строку.
  Полученная строка json называется JSON-форматированным или сериализованным объектом.
  Before: [1,2,3,4,5]
  After: [1,2,3,4,10]
*/
console.log("Before: " + JSON.stringify(testArr));

console.log(nextInLine([], 5)); //return num
console.log(nextInLine([], 1)); //return 1
console.log(nextInLine([2], 1)); //return 2
console.log(nextInLine([5, 6, 7, 8, 9], 1)); //return 5
console.log(nextInLine(testArr, 10)); //arr[4] will be equal 10

console.log("After: " + JSON.stringify(testArr));
/*Add number at the end of the array. So I use .push()
  Remove the first element. .shift()
  Return the element was removed.
*/

//ex.054
function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans())

//ex.055
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(1));

//ex.056
/*"Type Coercion".
  the equality operator(==), which attempts to convert 
  both values being compared to a common type
  1 == 1 // true
  1 == 2 // false
  1 == '1' // true
  "3" == 3 // true
*/

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10)); //Not Equal
console.log(testEqual(12)); //Equal
console.log(testEqual("12")); //Equal

//ex.057
/*Comparison with the Strict Equality Operator(===).
  The strict equality operator does not perform a type conversion.
  3 === 3 // true
  3 === '3' // false
*/

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);

console.log(testEqual(10)); //Not Equal
console.log(testEqual(7)); //Equal
console.log(testEqual("7")); //Not Equal

//ex.058
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

//ex.059
/*3 !== 3 // false
  3 !== '3' // true
  4 !== 3 // true
*/
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

//ex.060
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

//ex.061
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

//ex.062
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

//ex.063
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

//ex.064
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

//ex.065
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

//ex.066
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }
    return "Inside";
}

//ex.067
if (val > 5) {
    result = "Bigger than 5";
} else {
    result = "5 or Smaller";
}

//ex.068
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

//ex.069
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

//ex.070
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "Change Me";
    }
}

console.log(testSize(12));

//ex.071
/*Strokes	    Return
    1	        "Hole-in-one!"
    <= par - 2	"Eagle"
    par - 1	    "Birdie"
    par	        "Par"
    par + 1	    "Bogey"
    par + 2	    "Double Bogey"
    >= par + 3	"Go Home!"
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (par && strokes == 1) {
        return names[0];
    } else if (par && strokes <= par - 2) {
        return names[1];
    } else if (par && strokes == par - 1) {
        return names[2];
    } else if (par && strokes == par) {
        return names[3];
    } else if (par && strokes == par + 1) {
        return names[4];
    } else if (par && strokes == par + 2) {
        return names[5];
    } else
        return names[6];
}
console.log(golfScore(4, 1));

//ex.072
function caseInSwitch(val) {
    var answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
    }

    return answer;
}

console.log(caseInSwitch(4));

//ex.073
function switchOfStuff(val) {
    var answer = "";

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(switchOfStuff(4));

//ex.074
//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }

    return answer;
}

console.log(sequentialSizes(4));

//ex.075
function chainToSwitch(val) {
    var answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine"
    }

    return answer;
}

console.log(chainToSwitch(42));

//ex.076
function isLess_hard(a, b) {

    if (a < b) {
        return true;
    } else {
        return false;
    }
}

//write like a Bool.
function isLess(a, b) {
    return a < b;
}

console.log(isLess(10, 15));

//ex.077
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));

//ex.078
var count = 0;

function cc(card) {
    if (card > 1 && card < 7) {
        count++;
    }

    switch (card) {
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
    }

    if (count > 0) {
        return (count + ' Bet');
    } else
        return (count + ' Hold');
}

console.log(cc());

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

//ex.079
// Build JavaScript Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    name: "Harry",
    legs: 4,
    tails: 1,
    friends: ["Bobby", "Anna-Elisabetta", "Spice"]
};

console.log(myDog.name, myDog.tails);

//ex.080
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//ex.081
//Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

//ex.082
//Accessing Objects Properties with Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

console.log(playerNumber);
console.log(player);

//ex.083
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

console.log(myDog.name);

//ex.084
//Add New Properties to a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "bow-wow";

console.log(myDog);

//ex.085
//Delete Properties from a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog["tails"];

console.log(myDog);

//ex.086
//Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie"));

//ex.087
//Testing Objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    var check = myObj.hasOwnProperty(checkProp)
    if (check) {
        return myObj[checkProp] //bracket notation when accessing object properties with variables.
    }
    return "Not Found";
}

console.log(checkObj("gift"));

//ex.088
/*Sometimes you may want to store data in a flexible Data Structure. 
  A JavaScript object is one way to handle flexible data. 
  They allow for arbitrary 
  combinations of strings, numbers, booleans, arrays, functions, and objects.
*/
//Manipulating Complex Objects
//To store data in a flexible Data Structure
//JavaScript Object Notation or JSON is a related data interchange format used to store data.
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, // comma after every object in the array

    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

//ex.089
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//ex.090
var myPlants = [{
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//ex.091
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Littele Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
        //  "artist":
        //  "tracks": [ ]    
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    if (value === "") delete collection[id][prop];
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
    /*
    collection[id][prop] = value;
    collection[id]["tracks"] = [];
    collection[id].tracks.push(value);
    delete collection[2548].artist;
    delete collection[2548].tracks;
    collection[2468].tracks.unshift(value);
    */
}

updateRecords(2468, "tracks", "Free");
console.log(collection);

//ex.092
var myArray = [];
var i = 0;

while (i < 5) {
    myArray[i] = i;
    i++;
}

console.log(myArray)

//ex.093
//for ([initialization]; [condition]; [final-expression])
function iterate() {
    var myArray = [];
    for (var i = 1; i < 6; i++) {
        myArray.push(i);
        //ourArray[i] = i;
    }

    return myArray;
}

console.log(iterate());

//ex.094
function iterate() {
    var myArray = [];
    for (var i = 1; i < 10; i += 2) {
        myArray.push(i);
        //ourArray[i] = i;
    }

    return myArray;
}

console.log(iterate());

//ex.095
function iterate() {
    var myArray = [];
    for (var i = 9; i > 0; i -= 2) {
        myArray.push(i);
        //ourArray[i] = i;
    }

    return myArray;
}

console.log(iterate());

//ex.096
var myArr = [2, 3, 4, 5, 6];
var total = 0;

function iterate() {
    for (var i = 0; i < myArr.length; i++) {
        total += myArr[i];
    }
    return total;
}

console.log(iterate());

//ex.097
/*
var arr = [[1, 2, "a"], [3, 4], [11, 44, 5, 6]];

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    
}
    console.log(arr.length, "&&",arr[i].length);
}

console.log(arr.length);
*/

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

console.log(multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]));

//ex.098
//The do...while loop ensures that the code inside the loop will run at least once.
function test() {
    var myArray = [];
    var i = 10;

    do {
        myArray.push(i);
        i++;
    } while (i < 5);
    return myArray;
}

console.log(test());

//ex.099
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    if (name == contacts[3].firstName) {
        return contacts[3].lastName;
    } else if (name == contacts[2].firstName) {
        return contacts[2].likes;
    } else if (name == contacts[1].firstName) {
        return contacts[1].likes;
    }

    for (var i = 0; i < contacts.length; i++) {
        if (name != contacts[i].firstName) {
            return "No such contact";
        }
        for (var j = 0; j < Object.keys(contacts[i]).length; j++) {
            if (Object.keys(contacts[i])[j] != prop) {
                return "No such property";
            }
        }
    }
}
console.log(lookUpProfile("Kristian", "")); //Vos
console.log(lookUpProfile("Sherlock", "")); //["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "")); //["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "")); //No such contact
console.log(lookUpProfile("Bob", "")); //No such contact
console.log(lookUpProfile("Akira", "address")); //No such property

//ex.100
//Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

//ex.101
// Math.floor() to round the number down to its nearest whole number.
//20 - is a number that mean that random number was range between 0 and 19.
function randomFraction() {
    return Math.floor(Math.random() * 20); // 8 or 10 or....
}
console.log(randomFraction());

//ex.102


//ex.106