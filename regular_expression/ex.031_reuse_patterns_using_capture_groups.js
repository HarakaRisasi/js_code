/*
Повторное использование шаблонов с использованием группы захвата 
*/
let reRegex = /^(\d+)\s\1\s\1$/;

console.log("4 4 4".match(reRegex)); //=> ["4 4 4"]
console.log("100 100 100".match(reRegex)); //=> ["100 100 100"]
console.log("42 42 42 42".match(reRegex)); //=> null
console.log("42 42".match(reRegex)); //=> null
console.log("101 102 103".match(reRegex)); //=> null
console.log("1 2 3".match(reRegex)); //=> null
console.log("10 10 10".match(reRegex)); //=> ["10 10 10"]