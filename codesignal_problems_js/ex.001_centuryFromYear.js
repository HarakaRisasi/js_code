/*
Given a year, return the century it is in. The first century 
spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc.
*/
function centuryFromYear(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else if (year % 100 != 0) {
        return Math.trunc(year / 100 + 1);
    }
}

console.log(centuryFromYear(1988));
//<= year: 1905
//=> 20

//<= year: 1900
//=> 19