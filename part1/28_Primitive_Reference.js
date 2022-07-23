//Javascript has two types of values: primitive values and reference values. 
// You can add, change, or delete properties to a reference value, 
// whereas you cannot do it with a primitive value. Copying a primitive value 
// from one variable to another creates a separate value copy.



// primitve types

//Primitive type stack me store hote hain.
//num2 ko num1 ke == rakh diya, 
//num2 ke liye alg se memory me jagah milegi aur num1 ko alg
//isiliye num1 ko change krne pe num2 me koi frk nahi pdaa


// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️


// reference types 
// array 

// array1 heap me store hoga, 
// aur iska pointer stack me jayega jiske paas array1 address hoga
// ab hmne array2 == array1 rakh diya,
// tbhi array2 ke liye ak nya pointer banega, 
// aur array2 kaa usse adderess mil jayega jo array1 ke same hoga
// fir hmne array1 me 1 item add kr diya
// jisse array2 me bhi add ho jata h,, 
// kioki memory me dono kaa adderess same h

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);