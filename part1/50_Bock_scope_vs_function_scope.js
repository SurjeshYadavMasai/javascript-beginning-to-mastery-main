// // block scope vs function scope

// Function Scope: When a variable is declared inside a function,
//     it is only accessible within that function
//     and cannot be used outside that function.
// Block Scope: A variable when declared inside the
//      if or switch conditions or inside for or while loops,
//      are accessible within that particular condition or
//      loop.

// let and const are block scope
// var is function scope

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp() {
  if (true) {
    var firstName = "harshit";
    console.log(firstName);
  }

  if (true) {
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();
