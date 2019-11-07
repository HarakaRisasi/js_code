/*
A ticket number is considered lucky if the sum of the first half of 
the digits is equal to the sum of the second half.
*/
function isLucky(n) {
    /*
    toString() => 1230 to '1230';
    split('') => 1230 to '1', '2', '3', '0';
    map(Numbet) => 1230 to (4)[1, 2, 3, 0];
    */
    let x = n.toString().split('').map(Number);
    /*
    slice(0, arr.length / 2) => [1, 2, 3, 0] to [1, 2];
    reduce((a, b) => a + b) => [1, 2] to 3;
    */
    let half_1 = x.slice(0, x.length / 2).reduce((a, b) => a + b);
    /*
    slice((arr.length / 2), arr.length) => [1, 2, 3, 0] to [3, 0];
    reduce((a, b) => a + b) => [3, 0] to 3;
    */
    let half_2 = x.slice((x.length / 2), x.length).reduce((a, b) => a + b);

    //3 === 3 => true;
    return half_1 === half_2;
};
console.log(isLucky(1230)); //=> true
console.log(isLucky(239017)); //=> false
console.log(isLucky(261534)); //=> false