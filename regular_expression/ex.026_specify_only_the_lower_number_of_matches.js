/*
Specify Only the Lower Number of Matches
------------------
let A4 = 'haaaah';
let A2 = 'haah';
let A100 = 'h'+'a'.repeat(100)+'h';

let multipleA = /ha{3,}h/gi;

console.log(A4.match(multipleA)); //=> ["haaaah"]
console.log(A2.match(multipleA)); //=> null
console.log(A100.match(multipleA)); //=> ["haaaaaaaaaaaaaaaaaaa...aaaaaaaaaaaaaaah"]
------------------
*/
let haRegex = /.*z{4,}ah/i;
console.log("Hazzah".match(haRegex)); //=> null
console.log("Hazzzah".match(haRegex)); //=> null
console.log("Hazzzzah".match(haRegex)); //=> ["Hazzzza"]
console.log("Hazzzzzah".match(haRegex)); //=> ["Hazzzzza"]
console.log("Hazzzzzzah".match(haRegex)); //=> ["Hazzzzzza"]
console.log(("Ha" + "z".repeat(30) + "ah").match(haRegex)); //=> ["Hazzz...zzzza"]