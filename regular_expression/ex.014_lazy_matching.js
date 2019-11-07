/*
Lazy Matching

Use the backslash to escape any special character and interpret it literally; 
for example:
\\ (escapes the backslash)
\[ (escapes the bracket)
\{ (escapes the curly brace)
\. (escapes the dot)


Character classes
- ., matches any character except line breaks. Equivalent to [^\n\r].
- \d, matches any digit character (0-9). Equivalent to [0-9].
- \s, matches any whitespace character (spaces, tabs, line breaks).
- \w, matches any word character (alphanumeric & underscore). 
  Only matches low-ascii characters (no accented or non-roman characters). 
  Equivalent to [A-Za-z0-9_]
- [ABC], matches any character in the set.
- [^ABC], matches any character is not in the set.
- [A-Z], matches a character having a character code between the two specified characters inclusive.

Quantifiers & Alternation
- +, matches 1 or more of the preceding token.
- *, matches 0 or more of the preceding token.
- ?, matches 0 or 1 of the preceding token, effectively making it optional.
- +?, *? and ??, are equal to the preceding quantifiers, 
  but make them lazy causing it to match as few characters as possible. 
  By default, quantifiers are greedy, and will match as many characters as possible.
- |, acts like a boolean OR. Matches the expression before or after the |. 
  It can operate within a group, or on a whole expression. 
  The patterns will be tested in order.  

  [^a].* - любое кол-во символов кроме "a"
-----------------------------------------------------
let text = "Haraka";
-----------------------------------------------------
let regEx = /[a]*_/ig;
//=> ["", "a", "", "a", "", "a", ""]
-----------------------------------------------------
let regEx = /[a].*?/ig;
//=> ["a", "a", "a"]
-----------------------------------------------------
let regEx = /[^a].*?/ig;
//=> ["H", "r", "k"]
-----------------------------------------------------
-----------------------------------------------------
let regEx = /[^a]*_/ig;
//=> ["H", "", "r", "", "k", "", ""]
-----------------------------------------------------
-----------------------------------------------------
let regEx = /[^a]./ig;
//=> ["Ha", "ra", "ka"]
-----------------------------------------------------
*/
let text = "<h1>Winter is coming</h1>";
//To remind you, the .* mean 'zero or more (*) of any character (.)'.
let regEx = /<h.*?>/;
//Соответствие 

//let regEx = /<[h1]*?>/;
//let regEx = /<h1>?/;

console.log(text.match(regEx)); //=> "<h1>"