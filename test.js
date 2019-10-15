/*Use Multiple Conditional (Ternary) Operators

function checkSign(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

console.log(checkSign(10, 9)); //a is greater
console.log(checkSign(10, 10)); //a and b are equal
console.log(checkSign(10, 11)); //b is greater
*/

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

console.log(checkSign(10));