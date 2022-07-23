// how to clone array 
//Slice - Ye method kisi given index se leke end tk jata h 
// aur uss array ko return kr deta h
// how to concatenate two arrays
//concat-- It create same arraye like which array in its paas
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]); 
// let array2 = [].concat(array1,["item3", "item4"]); 
//ager array2 me array1 ke saare element aur extra element bhi chahiye
// new way 

// spread operator.....❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
//The JavaScript spread operator ( ... ) allows us to quickly copy all or part 
//of an existing array or object into another array or object.
//ager array2 me array1 ke saare element aur extra element bhi chahiye
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];   //It is for clone array

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)
 
