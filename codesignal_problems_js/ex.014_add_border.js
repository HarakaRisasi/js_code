/* 
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
picture = ["abc",
           "ded"]

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/
addBorder = p => [L = p[0].replace(/./g, a = `*`), ...p, L].map(s => a + s + a);

console.log(addBorder(["abc", "ded"])); //=> ["*****", "*abc*", "*ded*", "*****"]
console.log(addBorder(["a"])); //=> ["***", "*a*", "***"]
console.log(addBorder(["aa", "**", "zz"])); //=> ["****", "*aa*", "****", "*zz*", "****"]
console.log(addBorder(["wzy**"])); //=> ["*******", "*wzy***", "*******"]