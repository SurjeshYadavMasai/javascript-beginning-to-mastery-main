// find method 

// ❣️❣️The arr.find() method in Javascript 
// is used to get the value of the first 
// element in the array that satisfies 
// the provided condition. 
// It checks all the elements of 
// the array and whichever first element satisfies 
// the condition is going to print. 
// This function will not work function having
//  the empty array elements, also does not change the original array.
// return value.....
// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];
const myUser = users.find((user)=>user.userId===3);
console.log(myUser);