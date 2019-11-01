/*
Almost Increasing Sequence

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in 
order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
*/
function almostIncreasingSequence(sequence) {
    var count = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            };
        };
    };
    return count <= 1;
};

console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5])); //t
console.log(almostIncreasingSequence([1, 3, 2, 1])); //f
console.log(almostIncreasingSequence([1, 3, 2])); //t
console.log(almostIncreasingSequence([1, 2, 1, 2])); //f
console.log(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])); //f
console.log(almostIncreasingSequence([1, 1, 2, 3, 4, 4])); //f