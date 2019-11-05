/*
Given two strings, find the number of common characters between them.
*/

function commonCharacterCount(s1, s2) {
    //number to store duplicate characters
    let count = 0;

    //Turn the strings into arrays.
    let regEx = /[a-z]/ig;
    s1_regEx = s1.match(regEx);
    s2_regEx = s2.match(regEx);

    //If s1_arr[i] is once equal to s2_arr[j] then count++
    for (var i = 0; i < s1_regEx.length; i++) {
        for (var j = 0; j < s2_regEx.length; j++) {
            if (s1_regEx[i] === s2_regEx[j]) {
                s2_regEx[j] = null;
                count++;
                break;
            };
        };
    };
    return count;
};

console.log(commonCharacterCount("aabcc", "adcaa")); //=> 3
console.log(commonCharacterCount("zzzz", "zzzzzzz")); //=> 4
console.log(commonCharacterCount("abca", "xyzbac")); //=> 3
console.log(commonCharacterCount("a", "b")); //=> 0
console.log(commonCharacterCount("a", "aaa")); //=> 1