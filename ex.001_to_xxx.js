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
    
    var myArray = [["apple", 42], ["sony", 180]];

//ex.038
    var myData = 0;
    var myArray = [50,60,70];
    myData = myArray[0];
   
//ex.039
    var myArray = [18, 64, 99];
    myArray[0] = 45;
   
//ex.040
    var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
    var myData = myArray[2][1]; //myData = 8

//ex.041
    //Manipulate Arrays .push()
    var myArray = [["John", 23], ["cat", 2]];
    myArray.push(["dog", 3]);
    //Return [["John", 23], ["cat", 2], ["dog", 3]];

//ex.042
    //Manipulate Arrays .pop()
    var myArray = [["John", 23], ["cat", 2]];
    var removedFromMyArray = myArray.pop();
    window.alert(removedFromMyArray); // Returns ["cat", 2]
    console.log(removedFromMyArray); // Returns ["cat", 2]

//ex.043
    //Manipulate Arrays .shift()
    var myArray = [["John", 23], ["dog", 3]];
    var removedFromMyArray = myArray.shift();
    // Returns ["John", 23]

//ex.044
    //Manipulate Arrays .unshift()
    var myArray = [["John", 23], ["dog", 3]];
    myArray.shift(); //return ["John", 23];

    myArray.unshift(["Paul", 35]); //return [["Paul", 35],["John", 23]])

//ex.045
    //There should be at least 5 sub-arrays in the list.
    var myList = [["a",1],["b",2],["c",3],["d",4],["e",5]];

//ex.046
    /*function - is a reusable parts of code
        function functionName() {
            console.log("Hello World");
        }
        functionName(); //call function
    */
    
   function reusableFunction(){
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
    
   function functionWithArgs(a, b){
        console.log(a + b);
    }

    functionWithArgs(1, 2);

//ex.047
    var myGlobal = 10;
    var oopsGlobal;
    
    function fun1(){
        oopsGlobal = myGlobal / 2;
        console.log(oopsGlobal);
    }
    
    fun1();

//ex.048
    function myLocalScope(){
        var myVar;
    }

//ex.049
    function myOutfit(){
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

   function timesFive(num){
    return num * 5;
    }
    
    console.log(timesFive(5));
    
//ex.051
    //undefined return

    var sum = 0;
    function addFive(num){
        sum += 5;
        //without return;
    }
    console.log(addFive()); //return undefined

//ex.052
    var processed = 0;
    
    function processArg(num){
        return (num + 3) / 5;
    }
    processed = processArg(7);
    
    console.log(processed);

//ex.053
    function nextInLine(arr, item){
        //console.log("before" + JSON.stringify(arr));
        arr.push(item);
        //console.log("after" + JSON.stringify(arr));            
        var temp = arr.shift();
        return temp; 
    }
    
    var testArr = [1,2,3,4,5];
    /*Метод JSON.stringify(student) берёт объект и преобразует его в строку.
      Полученная строка json называется JSON-форматированным или сериализованным объектом.
      Before: [1,2,3,4,5]
      After: [1,2,3,4,10]
    */
    console.log("Before: " + JSON.stringify(testArr));
    
    console.log(nextInLine([], 5));             //return num
    console.log(nextInLine([], 1));             //return 1
    console.log(nextInLine([2], 1));            //return 2
    console.log(nextInLine([5,6,7,8,9], 1));    //return 5
    console.log(nextInLine(testArr, 10));       //arr[4] will be equal 10
    
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
    function trueOrFalse(wasThatTrue){
        if(wasThatTrue){
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
    
    function testEqual(val){
        if(val == 12){
            return "Equal";
        }
        return "Not Equal";
    }
    console.log(testEqual(10));   //Not Equal
    console.log(testEqual(12));   //Equal
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
    
    console.log(testEqual(10));   //Not Equal
    console.log(testEqual(7));   //Equal
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

//ex.107
    	

//ex.107
