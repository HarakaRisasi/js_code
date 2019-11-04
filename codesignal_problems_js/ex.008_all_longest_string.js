/*
function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}
*/
function allLongestStrings(inputArray) {
    let int_string = [];
    let longest_string = [];
    let great_example = 0;
    let count = 0;

    //Find the length of each item in the list
    for (let i = 0; i < inputArray.length; i++) {
        int_string[i] = inputArray[i].length;
    };

    //Find the longest list item
    great_example = Math.max.apply(null, int_string)

    //Take the longest element as a sample and save the lines 
    //from the list equal to this element in a new array.
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === great_example) {
            longest_string[count] = inputArray[i];
            count++;
        };
    };

    //Return a new array containing the list matching the job condition 
    return longest_string;
};
console.log(allLongestStrings(["abs", "aa", "ad", "vld", "aba"])); //=> ["abs", "vld", "aba"]