/*
***************************************************
                                           =      *
                             =            ===     *
                 =          ===          =====    *
    =           ===        =====        =======   *
                 =          ===          =====    *
                             =            ===     *
                                           =      *
    n = 1       n = 2      n = 3        n = 4     *
***************************************************
n(1) = 1;
n(2) = 5;
n(3) = 13;
n(4) = 25;
n(5) = 41;
n(7000) = 97986001;
*/
obj = 1;
summa = 0;

function shapeArea(n) {
    if (n > 1) {
        for (let i = 1; i < n; i++) {
            summa += 4;
            obj += summa;
        }
    }
    return obj;
};

console.log(shapeArea(7000));