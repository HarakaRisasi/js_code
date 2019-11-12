/*
Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, 
the third goes into team 1 again, the fourth into team 2, and so on.

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].
*/
function alternatingSums(a) {
    let first_squad = 0;
    let sec_squad = 0;
    for (let i = 0; i < a.length; i++) {
        i % 2 == 0 ? first_squad += a[i] : sec_squad += a[i];
    }
    return [first_squad, sec_squad]
}

console.log(alternatingSums([50, 60, 60, 45, 70])); //=> (2) [180, 105]