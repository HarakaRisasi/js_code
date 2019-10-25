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
*/

function centuryFromYear(year) {
    if(year % 100 === 0){
        return year / 100;
    }
    else if (year % 100 != 0){
        return Math.trunc(year / 100 + 1);
    }
}

console.log(centuryFromYear(1988));
