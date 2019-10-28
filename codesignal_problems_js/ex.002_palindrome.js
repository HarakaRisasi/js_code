/*
Palindrome

TL;DL(too long; didn't read)
A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note. You’ll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

To pass the last test case, we can use two Regular Expressions:

[^A-Z] matches anything that is not enclosed between A and Z

[^a-z] matches anything that is not enclosed between a and z

[^0-9] matches anything that is not enclosed between 0 and 9

[^_] matches anything that does not enclose _

 /g flag for global search
-------------------------------------------------------------------------------------------
/[^A-Za-z0–9]/g
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
/[\W_]/g
-------------------------------------------------------------------------------------------

\W is equivalent to [^A-Za-z0–9_]
\W removes all non-alphanumeric characters:

-------------------------------------------------------------------------------------------
function palindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
     
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
   
  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}
 
palindrome("A man, a plan, a canal. Panama");
-------------------------------------------------------------------------------------------
*/
function palindrome(str){
    let re = /[\W]/g;
    let lowRegStr = str.toLowerCase().replace(re, ''); //methods with built-in functions
    let reverseStr = lowRegStr.split('').reverse().join(''); //=> (1racecar2) reverse to (2racecar1)
    return reverseStr === lowRegStr;
}
console.log(palindrome('1raCecAr1'));