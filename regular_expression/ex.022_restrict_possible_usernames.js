/*
Наборы символов
[^abc]	Find any character NOT between the brackets
[^0-9]	Find any character NOT between the brackets (any non-digit)

Beginning and end of line
^  Сопоставляется c началом ввода.
$  Сопоставляется c концом ввода.

Символьные классы
.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
global - Checks whether the "g" modifier is set
ignoreCase - Checks whether the "i" modifier is set
*/
let userCheck = /^[a-z](\d\d+|[a-z]+\d*)$/i;
/*
^ - start of input
[a-z] - first character is a letter
\d\d+ - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
*/
console.log("JACK".match(userCheck));        //=> JACK
console.log("J".match(userCheck));           //=> null
console.log("Jo".match(userCheck));          //=> Jo
console.log("Oceans11".match(userCheck));    //=> Oceans11
console.log("RegexGuru".match(userCheck));   //=> RegexGuru
console.log("007".match(userCheck));         //=> null
console.log("9".match(userCheck));           //=> null
console.log("A1".match(userCheck));          //=> null
console.log("BadUs3rnam3".match(userCheck)); //=> null
console.log("Z97".match(userCheck));         //=> Z97