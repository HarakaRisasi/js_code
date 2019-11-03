//The_sum_of_nonzero_elements_in_the_matrix_column
function matrixElementsSum(matrix) {
    var sum = 0;

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (i < matrix.length - 1) {
                if (matrix[i][j] === 0) {
                    matrix[i + 1][j] = 0;
                };
            };
            if (matrix[i][j] != 0)
                sum += matrix[i][j];
        };
    };
    return sum;
};

console.log(matrixElementsSum([
    [0, 0, 1, 2],
    [2, 5, 0, 0],
    [2, 0, 3, 3]
]));
/*
function return:
    0, 0, 1, 2
    0, 0, 0, 0
    0, 0, 0, 0
    
    1 + 2 = 3

    => 3
*/