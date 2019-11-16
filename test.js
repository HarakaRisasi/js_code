function rounders(n) {
    
    let x = ((n + '').split('')).map(Number)
    return x.forEach(num => {num -1
    });
    

}
console.log(rounders(15)); //=> 20
console.log(rounders(1234)); //=> 1000
console.log(rounders(1445)); //=> 2000
console.log(rounders(14)); //=> 10
console.log(rounders(10)); //=> 10
console.log(rounders(7001)); //=> 7000
console.log(rounders(99)); //=> 100