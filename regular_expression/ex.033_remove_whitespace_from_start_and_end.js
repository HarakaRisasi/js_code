/*
 Remove Whitespace from Start and End

 Sometimes whitespace characters around strings are not wanted but are there. 
 Typical processing of strings is to remove the whitespace at 
 the start and end of it.
 
 The .trim() method would work here, but you'll need to complete 
 this challenge using regular expressions.
*/
//Создаю строку
let hello = "   Hello, World!  ";
/*
1)Строка начинается с пробела(одного или нескольких)
2)или
3)строка заканчивается пробелом (одним или несколькими)
*/
let wsRegex = /^\s+|\s+$/g;
//замена патерна wsRegex на ""
let result = hello.replace(wsRegex, "");

console.log(result); //=> Hello, World!