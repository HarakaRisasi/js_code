function adjacentElementsProduct(inputArray) {
    let numbers = -100
    
    for (let i = 0; i < inputArray.length; i++) {
       if (inputArray[i] * inputArray[i + 1] >= numbers) {
          numbers = inputArray[i] * inputArray[i + 1]
       }
    }
    return numbers;
 }
 const inputArray = [3, 6, -2, -5, 7, 3];

console.log(adjacentElementsProduct(inputArray));