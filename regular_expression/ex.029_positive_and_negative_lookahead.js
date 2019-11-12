/*
x(?=y)	
Соответствует 'x' только если за 'x' следует 'y'. 
Это называется упреждение.

Например, /Jack(?=Sprat)/ соответствует 'Jack' только если за ним следует 'Sprat'. 
/Jack(?=Sprat|Frost)/ соответствует 'Jack' только если за ним 
следует 'Sprat' или 'Frost'. 
Тем не менее, ни 'Sprat' ни 'Frost' не являются частью сопоставленного результата.

x(?!y)	
Соответствует 'x' только если за 'x' не следует 'y'. 
Это называется отрицательное упреждение.

Например, /\d+(?!\.)/ соответствует числу только если за ним не следует десятичная 
точка. Регулярное выражение /\d+(?!\.)/.exec("3.141") сопоставит '141' но не '3.141'.
------------------------
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\d)/;
//let checkPass = /(?=\w{3,6}\D*\d)/; - тоже самое.
console.log(checkPass.test(password)); //=> true
------------------------
------------------------
let quit = "qu";
let noquit = "qt";
let q_regEX = /q(?=u)|q(?!u)/g;

console.log(quit.match(q_regEX)); //=> "q"
console.log(noquit.match(q_regEX)); //=> "q"
------------------------
------------------------
let pwRegex = /^(?!\d)[\w]{3,}(?=\D*\d{2}$)/;
------------------------
1)Строка не должна начинаться с цифры
2)Длинна строки до второго патерна не менее 3-х символов
3)окончанием строки должны быть 2 цифры.
4)({3,} + {2} = минимум 5 и более символов) - общая длина строки.
*/
let pwRegex = /^(?!\d)(?=\w)(?=\D*\d{2})/;

console.log("astronaut".match(pwRegex));
console.log("airplanes".match(pwRegex));
console.log("banan1".match(pwRegex));
console.log("bana12".match(pwRegex));
console.log("abc123".match(pwRegex));
console.log("123".match(pwRegex));
console.log("1234".match(pwRegex));