//What is prototype chain?
// Each object has a private property 
// which holds a link to another object called its prototype.

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// __proto__
//❣️❣️❣️❣️❣️❣️
//Proto: It is an actual object that provides
//a way inherit to inherit properties from
//JavaScript with the help of an object
// which is created with new. Every object
//with behavior associated has internal property [[prototype]].

// offical ecmascript documentation
// [[prototype]]
// __proto__ , [[prototype]] sama h dono

// prototype
//❣️❣️❣️❣️❣️❣️
//Prototype: It is a special object which means
//it holds shared attributes and behaviors
//of instances. It is a way to inherit properties
//from javascript as it is available in every function declaration.
const obj2 = Object.create(obj1); // {}
//mai chahta hu obj2 me key1 naa hone me obj1 se utha le, isiliye ye set kiya h
//obj2._proto_ yaha pe obj1 set ho gya
//isi kaam ko prototype chaining bolte hain
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);
