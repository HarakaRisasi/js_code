/*
Lazy Matching

In regular expressions, a greedy match finds the longest possible 
part of a string that fits the regex pattern and returns it as a match. 
The alternative is called a lazy match, which finds the smallest 
possible part of the string that satisfies the regex pattern.
------------------------------------------
let one = "titanic";
let regEx = /t[a-z]*i/;
console.log(one.match(regEx)); //=> titani
------------------------------------------
Use the backslash to escape any special character and interpret it literally; 
for example:

\\ (escapes the backslash)
\[ (escapes the bracket)
\{ (escapes the curly brace)
\. (escapes the dot)

- A string enclosed in brackets [ ] matches any single character from the string.

- The dot (.) -In regex, the dot corresponds to any character except a newline character.
    .art == dart, cart, tart

- Question mark - (?) - The question mark indicates zero or one occurrences of the 
  preceding element. 
  For example, colou?r matches both "color" and "colour".  
  Этот метасимвол позволяет сопоставить либо ноль, либо один из предшествующих 
  символов или групп. Например, шаблон "ab?c" будет соответствовать 
  либо строкам 'abc', либо 'ac', потому что b считается необязательным.
  
  a[n]? h  == a herb || an herb - т.е. в слове необязательно присутствие [n]

- Asterisk (*) matches a sequence of zero or more occurrences of the regular expression
  Следует отметить, что регулярные выражения не являются символами подстановки. 
  Регулярное выражение «c * t» не означает «совпадение» с «cat», «cot» и т. Д. 
  В этом случае это означает «совпадение с нулем или более символов« c », 
  за которыми следует символ t», 
  поэтому оно будет соответствовать значению «t». ',' ct ',' cccct 'и т. д.

  [^a].* - любое кол-во символов кроме "a"
*/
let text = "<h1>Winter is coming</h1>";
//To remind you, the .* mean 'zero or more (*) of any character (.)'.
let regEx = /<h1.*?>/;
//let regEx = /<[h1.]*?>/;
//let regEx = /<[h1]*?>/;
//let regEx = /<h1>?/;

console.log(text.match(regEx)); //=> "<h1>"