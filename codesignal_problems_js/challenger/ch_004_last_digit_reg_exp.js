/*
Given a string with at least one digit, extract the rightmost digit from it.
*/
function lastDigitRegExp(inputString) {
    //Making the new array with separate numbers.
    let r = inputString.match(/\d/g)
    //Сalculate the length of a new array.
    let l = r.length
    //Slice of the required array index, where the contents of the cell are converted to a string type.
    return r.slice(Math.max(l - 1)).toString()
}

console.log(lastDigitRegExp("var_1__Int")); //=> 1
console.log(lastDigitRegExp("qq2q")); //=> 2
console.log(lastDigitRegExp("0ss")); //=> 0
console.log(lastDigitRegExp("3w2")); //=> 2