/*
Write a function that reverses characters in (possibly nested) 
parentheses in the input string.

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";

\( - means the string to extract is described by that part of the expression 
that is contained within round brackets.
\) - marks the end of the expression describing the string we want to extract.
--------------------------------------------
function reverseInParentheses(inputString) {
    //extract part of a string using reg_ex and cast the result to string type
    let str = inputString.match(/\(.*\)/g).toString();
    //measuring the length of a new array
    let str_leng = str.length;  
    //create a new array of individual elements of the string part
    let arr =  str.substr(1, str_leng - 2).split('');  
    //changing array cell values
    [arr[0], arr[str_leng - 3]] = [arr[str_leng - 3], arr[0]];
    //join array elements into a single string
    let x = arr.join('');
    //replacing by flag, which is reg_ex, part of the word with the changed part.
    return inputString.replace(str, x);
}
//=> rab
//=> foorabbaz
--------------------------------------------
--------------------------------------------
reverseInParentheses = str => {

    "use strict";

    let indexOfRightParen = 0,
        leftParen = 0;
    let needToReverse = "";

    //Loop through the string for the farthest out right parenthesis. As long as one exists...
    while (str.indexOf(')', 0) != -1) {

        //Start searching at zero for any right parentheses 
        indexOfRightParen = str.indexOf(')', 0);

        // Find the farthest out left parenthesis, starting backwards from each ')'
        leftParen = str.lastIndexOf('(', indexOfRightParen);

        //Make a copy of the str content between parentheses, make it into an array, reverse the order, and make it a string again.
        needToReverse = str.slice(leftParen + 1, indexOfRightParen).split("").reverse().join("");

        //Copy the unchanged values outside of parentheses of str and concatenate with needToReverse
        str = str.slice(0, leftParen) + needToReverse + str.slice(indexOfRightParen + 1);
    }
    return str;
}
--------------------------------------------
--------------------------------------------
function reverseInParentheses(str) {
        
        "use strict";
        
        //As long as the indexof the right parenthesis(beginning at index 0) is not found...
        while (str.indexOf(")",0)!=-1) {

       //Start searching at zero for any right parentheses 
        var indexOfRightParen = str.indexOf(")", 0);
             
        // The farthest out left parenthesis - starting backwards from each ')'
        var leftParen = str.lastIndexOf('(', indexOfRightParen);
             
        //Make a copy of the str content between parentheses, make it into an array, reverse the order, and make it a string again.
        var needToReverse = str.slice(leftParen + 1, indexOfRightParen).split("").reverse().join("");

        //Copy the unchanged values outside of parentheses of str and concatenate with needToReverse
        var str = str.slice(0, leftParen) + needToReverse + str.slice(indexOfRightParen + 1); 

        } return str;    
}
--------------------------------------------
*/
function reverseInParentheses(inputString) {
    let regex = /\(([a-z]+)?\)/gi;
    if (regex.test(inputString)) {
        return reverseInParentheses(inputString.replace(regex, x => x.split('').slice(1, -1).reverse().join('')));
    }
    return inputString;
}

console.log(reverseInParentheses("(bar)")); //=> "rab"
console.log(reverseInParentheses("foo(bar)baz")); //=> "foorabbaz"
console.log(reverseInParentheses("foo(bar)baz(blim)")); //=> "foorabbazmilb"
console.log(reverseInParentheses("foo(bar(baz))blim")); //=> "foobazrabblim"
console.log(reverseInParentheses("")); //=> undefined
console.log(reverseInParentheses("()")); //=> undefined
console.log(reverseInParentheses("(abc)d(efg)")); //=> "cbadgfe"