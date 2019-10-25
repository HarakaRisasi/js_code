/*
Use getters and setters to Control Access to an Object

You can obtain values from an object, and set a value of a property within an object.

-Getter functions are meant to simply return (get) the value of an object's private variable to the user 
without the user directly accessing the private variable.

-Setter functions are meant to modify (set) the value of an object's private 
variable based on the value passed into the setter function. 
This change could involve calculations, or even overwriting the previous value completely.
*/

/*
Use getters and setters to Control Access to an Object

You can obtain values from an object, and set a value of a property within an object.

-Getter functions are meant to simply return (get) the value of an object's private variable to the user 
without the user directly accessing the private variable.

-Setter functions are meant to modify (set) the value of an object's private 
variable based on the value passed into the setter function. 
This change could involve calculations, or even overwriting the previous value completely.
*/

/*
Use getters and setters to Control Access to an Object

You can obtain values from an object, and set a value of a property within an object.

-Getter functions are meant to simply return (get) the value of an object's private variable to the user 
without the user directly accessing the private variable.

-Setter functions are meant to modify (set) the value of an object's private 
variable based on the value passed into the setter function. 
This change could involve calculations, or even overwriting the previous value completely.
-----------------------------------------
class Book {
    constructor(author){
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol._author); //=> anonymous

lol.writer = 'Haraka';
console.log(lol._author); //=> Haraka
-----------------------------------------
*/


