/*
Find the sum of cubes of all integers starting 
from 1 up to the given integer n, inclusive.

For n = 3, the output should be
sumOfCubes(n) = 36.

Because 13 + 23 + 33 = 1 + 8 + 27 = 36.
*/
function sumOfCubes(n) {
    let x = []; //Making_an_array;
    //Filling an array with a sequence of numbers
    for (let i = 0; i < n; i++) {
        x[i] = i + 1;
    }
    //Numbers into a cube with their subsequent addition
    x = x.map(n => n * n * n).reduce((a, b) => a + b);

    return x;
}
console.log(sumOfCubes(3)); //=> 36
console.log(sumOfCubes(1)); //=> 1