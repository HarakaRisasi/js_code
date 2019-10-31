//Input non-sorted array
const statues = [6, 3, 8];

function space_fill(statues) {
    //The arrow function for sorting array
    const makeArrayConsecutive2 = () => statues.sort();
    let sorted = makeArrayConsecutive2(statues);
    //Find min and max value;
    let min = Math.min.apply(null, sorted);
    let max = Math.max.apply(null, sorted)


    for (let i = 0; i <= max; i++) {
        if (i >= min) {
            if ((sorted[i + 1] - sorted[i]) != 1) {
                sorted[i] = i;
            }
            console.log(sorted[i]);
        }
    }
};

console.log(space_fill(statues)); 
/*
input:
 [6, 3, 8]

output:
0: [3]
1: [4]
2: [5]
3: [6]
4: [7]
5: [8]
*/