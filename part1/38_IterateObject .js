// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}
  //There are two ways to itrate in object
// 1. for in loop 
// 2. Object.keys 
// // ❤️❤️❤️❤️❤️❤️❤️
// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key, " : " ,person[key]); 
// }


// // ❤️❤️❤️❤️❤️❤️❤️
// console.log(typeof (Object.keys(person)));//------❤️❤️ // it return a array of all keys
// const val = Array.isArray((Object.keys(person)));
// console.log(val);



// // ❤️❤️❤️❤️❤️❤️❤️
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }