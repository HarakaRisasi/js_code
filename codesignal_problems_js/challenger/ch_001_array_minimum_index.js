/*Given array of integers, find the 0-based index of its minimal element.

For inputArray = [19, 32, 11, 23], 
the output should be arrayMinimumIndex(inputArray) = 2.
*/
function arrayMinimumIndex(inputArray) {
    let x = Math.min(...inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        if (x === inputArray[i]) {
            return i;
        };
    };
};

console.log(arrayMinimumIndex([19, 32, 11, 23])); //=> 2