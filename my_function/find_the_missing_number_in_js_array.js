const arr = [2, 3, 6, 8, 12];

let [min,max] = [Math.min(...arr), Math.max(...arr)];
let out = Array.from(Array(max-min),(i)=>i+min).filter(i=>!arr.includes(i));

console.log(out);

/*
input:
    [2, 3, 6, 8, 12]

output:
    [4, 5, 7, 9, 10, 11]
*/

