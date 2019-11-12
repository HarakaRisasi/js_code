/*
You are processing the results of an online poll and your task is to exclude answers 
that might have been submitted by bots from the final results. 
The poll consists of three questions, the answer to each one is either true or false. 
You think that a response is suspicious 
(i.e. it might be from a bot) if all of the submissions are the same.

For ans1 = false, ans2 = false, and ans3 = false, the output should be
isSuspiciousRespondent(ans1, ans2, ans3) = true;

For ans1 = true, ans2 = true, and ans3 = false, the output should be
isSuspiciousRespondent(ans1, ans2, ans3) = false.
*/
function isSuspiciousRespondent(ans1, ans2, ans3) {
    let temp = 0;
    for (let i = 0; i < arguments.length; i++) {
        arguments[i] == 0 ? temp += 0 : temp += 1;
    }
    return temp > 0 && temp < 3 ? false : true
}

console.log(isSuspiciousRespondent(true, true, true)); //=> true