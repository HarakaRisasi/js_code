/*
We want to turn the given integer into a number that has only one non-zero 
digit using a tail rounding approach.
This means that at each step we take the last non 0 digit of the number 
and round it to 0 or to 10. If 
it's less than 5 we round it to 0 if it's larger than or equal 
to 5 we round it to 10 (rounding to 10 means increasing the next 
significant digit by 1). 
The process stops immediately once there is only one non-zero digit left.

1234 -> 1230 -> 1200 -> 1000.
1445 -> 1450 -> 1500 -> 2000.
-----------------------------------
function rounders(n) {
    let num = n + '';
    let x = num.split('').length - 1 ** 10;
    let last_num = Number((((((n / (10 ** (x)).toFixed(2))) + '').split('')).pop()));

    return last_num === 5 ? Math.ceil(+num / (10 ** (x))).toFixed(2) * (10 ** (x)) : Math.round(+num / (10 ** (x))).toFixed(2) * (10 ** (x))
}
-----------------------------------
-----------------------------------
function rounders(n) {
    let splt = (n + '').split('').map(Number)
    let x = 10 ** (splt.length - 1);
    return splt.pop() >= 5 ? Math.ceil(n / x) * x : Math.round(n / x) * x;
}
-----------------------------------
*/
f = rounders = n => n < 10 ? n : f(Math.round(n / 10)) * 10

console.log(rounders(1,2,3,4)); //=> 20
console.log(rounders(1234)); //=> 1000
console.log(rounders(1445)); //=> 2000
console.log(rounders(14)); //=> 10
console.log(rounders(10)); //=> 10
console.log(rounders(7001)); //=> 7000
console.log(rounders(99)); //=> 100