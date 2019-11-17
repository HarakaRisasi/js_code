/*
The NAND operation (also known as a Sheffer stroke) is an operation 
on two logical values. 
It produces true, if - and only if - at least one of the operands is false.
0 0 = true
0 1 = true
1 0 = true
1 1 = false
*/
shefferStroke = (a, b) => a && b === true ? false : true;

console.log(shefferStroke(false, false)); //=> true
console.log(shefferStroke(false, true)); //=> true
console.log(shefferStroke(true, false)); //=> true
console.log(shefferStroke(true, true)); //=> false