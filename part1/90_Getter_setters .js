// getter and setters
//❣️❣️❣️❣️In JavaScript, getter methods
//are used to access the properties of an object

//❣️❣️❣️❣️ In JavaScript, setter methods
// are used to change the values of an object.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    // get lagane se fullname property ki tarah access kr sakte h
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); //ye method space se tod dega aur string bna e dega alg alg
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);
