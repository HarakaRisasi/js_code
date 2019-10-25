/*
Для работы с данными функциями я взято за основу два ресурса.
http://underscorejs.ru/#oop
https://www.jsdelivr.com/package/npm/lodash?version=4.17.14

Цель в том, чтобы понять мысль программистов создавших эти ф-и.
Так же цель в том, чтобы создать решения для основных задач прогр-я
таких как например "сортировка массива" и.т.д.

?Function and method?

A function is a piece of code that is called by name. 
It can be passed data to operate on (i.e. the parameters) and can optionally 
return data (the return value). All data that is passed to a function is explicitly passed.

A method is a piece of code that is called by a name that is associated with an object. 
In most respects it is identical to a function except for two key differences:

A method is implicitly passed the object on which it was called.
A method is able to operate on data that is contained within the 
class (remembering that an object is an instance of a class - the class 
is the definition, the object is an instance of that data).

For Java, there are only methods.
For C, there are only functions.
For C++ it would depend on whether or not you're in a class.
*/

//001_apply.js

//func.call(context, …args) - for passing content
function sayHi(){
    alert (this.name);
}

forEach – для перебора массива.
filter – для фильтрации массива.
every/some – для проверки массива.
map – для трансформации массива в массив.
reduce/reduceRight – для прохода по массиву с вычислением значения.
