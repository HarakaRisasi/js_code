let crowd = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3';

let reCriminals = /c+/gi;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); //=> ["CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"]