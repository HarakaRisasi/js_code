/*
Метод splice(i,n,add) можно использовать для добавления или удаления элементов из массива. 
Первый аргумент указывает местоположение, с которого начинается добавление или удаление элементов. 
Второй аргумент указывает количество удаляемых элементов. 
Третий и последующие аргументы являются необязательными; 
Они определяют элементы, которые будут добавлены в массив.

!If JS function sorting wrong!

If compareFunction is not supplied, elements are sorted by converting them to strings 
and comparing strings in lexicographic ("dictionary" or "telephone book," not numerical) order. 
For example, "80" comes before "9" in lexicographic order, but in a numeric sort 9 comes before 80.
----------------------
.sort((a, b) => a - b)
----------------------
*/
function sortByHeight(a) {
    //make_temp_array
    let temp = [];
    //setting_a_flag_on_an_array_index_and_filling_the_array_'temp'_with_elements.
    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            temp[i] = a[i];
            a.splice(i, 1, '!');
        }
    }
    
    //сleaning_the_array_of_non_num_elements_and_sorting_it
    temp = temp.filter(x => x > 0).sort((a, b) => a - b);

    //Insertion into the 'a' array of elements from the 'temp' array
    let n = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '!') {
            a[i] = temp[n];
            n++;
        }
    }
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
//=> (8) [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, -1, -1, -1, -1]));
//=> (5) [-1, -1, -1, -1, -1]
console.log(sortByHeight([-1])); //=> 
[-1]
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
//=> (6) [2, 2, 4, 9, 11, 16]
console.log(sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]));
//=> (14) [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]
console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
//=> (12) [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]