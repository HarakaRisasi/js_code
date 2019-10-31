/*
For statues = [6, 2, 3, 8]
The output should be:
//=> makeArrayConsecutive2(statues) = 3.
*/
var arr = [2, 3, 6, 8, 12]; 
var [min,max] = [Math.min(...arr), Math.max(...arr)];
var out = Array.from(Array(max-min),(v,i)=>i+min).filter(i=>!arr.includes(i));

console.log(out);
/*
input:
    [2, 3, 6, 8, 12]

output:
    [4, 5, 7, 9, 10, 11]
*/

