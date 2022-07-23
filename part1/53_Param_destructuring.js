// param destructuring 
// Destructuring in JavaScript is used to
// unpack or segregate values from arrays
//  or properties from object literals into 
// distinct variables, thus it allows us to access only
//  the values required. 
// object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);