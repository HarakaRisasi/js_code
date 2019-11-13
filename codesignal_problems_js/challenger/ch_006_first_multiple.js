/*
Find the smallest integer not less than the given limit which is divisible by all integers from the given array.

is_my_solution_but_i_don't_understand_what's_wrang.
------------------------------------------------------------
function firstMultiple(divisors, start) {

    let n = divisors.map(x => Math.trunc(start / x) * x)[0];

    x = [];
    y = [];
    count = 0;
    calc = n;

    for (let i = 0; i <= divisors.length - 1; i++) {        
        if (divisors[i] <= 1) {
            y = start;
            break;
        } else {
            while (calc <= (start * 2)) {
                calc += divisors[i]
                x[count] = calc;
                count++;
            }
            calc = n;
        }        
    }   

    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
            if (x[i] == x[j]) {
                y = x[i];
            }
        }
    }
    return y;
}
console.log(firstMultiple([2, 3, 4], 13)); //=> 24
console.log(firstMultiple([5, 6], 62)); //=> 90_is_correct <-------------> 120_is_not_correct
console.log(firstMultiple([1], 123)); //=> 123
console.log(firstMultiple([5, 7, 11], 386)); //=> 770
------------------------------------------------------------
*/
function firstMultiple(divisors, start) {

    var len = divisors.length;
    var switch_true = true;
    var begin = start;
    var count = 0;

    while (switch_true) {
        for (let i = 0; i < len; i++) {
            if (begin % divisors[i] == 0) {
                count++;
                if (count == len) {
                    switch_true = false;
                }
            }
        }
        begin++;
        count = 0;
    }
    return begin - 1;
}

console.log(firstMultiple([2, 3, 4], 13)); //=> 24
console.log(firstMultiple([5, 6], 62)); //=> 90
console.log(firstMultiple([1], 123)); //=> 123
console.log(firstMultiple([5, 7, 11], 386)); //=> 770