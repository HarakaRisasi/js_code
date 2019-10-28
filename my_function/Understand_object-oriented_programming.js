
/*
Object-Oriented Programming, or OOP, is a programming paradigm that uses objects containing both data and behavior to create programs.

A class is an object-oriented abstraction for an idea or a concept manipulated by a program. 
It offers a convenient syntax to create objects representing this concept.

A JavaScript class is defined with the 'class' keyword. It can only contain methods. 
The 'constructor()' method, called during object creation, is used to initialize the object, often by giving it some data properties. 
Inside methods, the 'this' keyword represents the object on which the method was called.
--------------------------------------
class MyClass {
  constructor(param1, param2, ...) {
    this.property1 = param1;
    this.property2 = param2;
    // ...
  }
  method1( ... ) {
    // ...
}
method2( ... ) {
  // ...
}
// ...
}
--------------------------------------
Objects are created from a class with the new operator. 
It calls the class constructor to initialize the newly created object.
--------------------------------------
const myObject = new MyClass(arg1, arg2, ...);
--------------------------------------

Prototype of object - is an object has an internal property which is a link to another object.

JavaScript classes
-----------------------------------------
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
    }
    describe(){
      return `${this.name}, has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
  }

  This example demonstrates several key facts about JavaScript classes:

-A class is created with the class keyword, followed by the name of the class (usually starting with an uppercase letter).
-Contrary to object literals, there is no separating punctuation between the elements inside a class.
-A class can only contain methods, not data properties.
-Just like with object literals, the this keyword is automatically set by JavaScript inside a method and represents the object on which the method was called.
-A special method named constructor() can be added to a class definition. It is called during object creation and is often used to give it data properties.
-----------------------------------------
Using a Class
-------------------------------------------
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
    }
    describe(){
      return `${this.name}, has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
  }

const aurora = new Character("Aurora", 300, 500);
const haraka = new Character("Haraka", 1000, 10000000);

console.log(haraka.describe()); //=> Haraka, has 1000 health points, 10000000 as strength and 0 XP points
console.log(aurora.describe()); //=> Aurora, has 300 health points, 500 as strength and 0 XP points

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;
console.log(aurora.describe()); //=> Aurora, has 280 health points, 510 as strength and 15 XP points
-------------------------------------------
*/
class Character {
  constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
  }

  //Attack a target
  attack(target) {
      if (this.health > 0) {
          const damage = this.strength;
          console.log(`${this.name} attacks ${target.name}, and causes ${damage} damage points`);
          target.health -= damage;
          if (target.health > 0) {
              console.log(`${target.name} has ${target.health} health points left`);
          } else {
              target.health = 0;
              const bonusXP = 10;
              console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
              this.xp += bonusXP;
          }
      } else {
          console.log(`${this.name} can't attack (they've been eliminated)`);
      }
  }
  describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

/*
Welcome to the adventure! Here are our heroes:
Aurora has 150 health points, 25 as strength and 0 XP points
Glacius has 130 health points, 30 as strength and 0 XP points
A wild monster has appeared: it's named Spike
Spike attacks Aurora, and causes 20 damage points
Aurora has 130 health points left
Spike attacks Glacius, and causes 20 damage points
Glacius has 110 health points left
Aurora attacks Spike, and causes 25 damage points
Spike has 15 health points left
Glacius attacks Spike, and causes 30 damage points
Glacius eliminated Spike and wins 10 experience points
Aurora has 130 health points, 25 as strength and 0 XP points
Glacius has 110 health points, 30 as strength and 10 XP points
*/