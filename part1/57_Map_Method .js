// map method

//❣️❣️The map() method creates a new
//array populated with the results of calling
//a provided function on every element in the calling array.

// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

const userNames = users.map((user) => {
  return user.firstName;
});

console.log(userNames);
