/*
For statues = [6, 2, 3, 8]
The output should be:
    makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
------------------------------------------------------------
function makeArrayConsecutive2(statues) {
    let maxInNumbers = Math.max.apply(Math, statues); 
    let minInNumbers = Math.min.apply(Math, statues);
    return maxInNumbers - minInNumbers + 1 - statues.length;
}
------------------------------------------------------------
------------------------------------------------------------
makeArrayConsecutive2 = statues => {
    const max = Math.max(...statues)
    const min = Math.min(...statues)
    return 1+max-min-statues.length
}
------------------------------------------------------------

*/
function makeArrayConsecutive2(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) - sequence.length + 1;
};

console.log(makeArrayConsecutive2([6, 2, 3, 8]));