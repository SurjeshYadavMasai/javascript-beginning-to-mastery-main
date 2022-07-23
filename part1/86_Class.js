// 2015 / es6 
// class keyword 
// class are fake
// ❣️❣️❣️❣️❣️❣️❣️❣️❣️❣️
//A class is a blueprint used to create 
// objects in Javascript. Classes in 
// Javascript can be defined as a 
// template that encapsulates the data with 
// code to work on that data. The classes in 
// Javascript are often referred to as the 
// syntactical sugar provided in the ES6 
// addition to extend object properties and 
// methods in a more elegant manner 
// (which was earlier done using prototypes and inheritance).





//bina new keyword ke class constructor ko call nahi kr sakte
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));
