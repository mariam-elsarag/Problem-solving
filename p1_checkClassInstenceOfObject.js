/**
 * Check if Object Instance of Class
 * Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.
 */

/**
 * Hint help me
 *
 * __proto__ is a property of every object in JavaScript.
 * It points to the prototype of the object's constructor — that is,
 * it links the object to its prototype chain.
 *
 * You can get the prototype of an object with the Object.getPrototypeOf(obj) function. Alternatively, you can code obj['__proto__'].
 */

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj == null || typeof classFunction !== "function") return false;
  let objPrototype = Object.getPrototypeOf(obj);
  while (objPrototype !== null) {
    if (objPrototype === classFunction.prototype) return true;
    objPrototype = Object.getPrototypeOf(objPrototype);
  }
  return false;
};

class Animal {}
class Dog extends Animal {}

checkIfInstanceOf([], null);
console.log(checkIfInstanceOf(null, null));
console.log(checkIfInstanceOf(Date, Date));
console.log(checkIfInstanceOf(new Dog(), Animal));
console.log(checkIfInstanceOf(5, Number));
console.log(checkIfInstanceOf(5n, BigInt));
