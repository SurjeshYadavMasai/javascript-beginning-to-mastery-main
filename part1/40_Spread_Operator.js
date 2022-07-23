// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// The JavaScript spread operator (...)
// allows us to quickly copy all or part
// of an existing array or object into another array or object.

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// Spread operator allows an iterable
//  to expand in places where 0+ arguments
//  are expected. It is mostly used in the
//  variable array where there is more than
//  1 values are expected. It allows us the privilege
//  to obtain a list of parameters from an array.
//  Syntax of Spread operator is same as Rest parameter but
//  it works completely opposite of it.

// spread operator in array // ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

//kisi obj me same key hone pe 2nd baali key ki value aayegi

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };   // isme key iski index value hogi aur value abcd bann jayegi
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };   // isme key iski index value hogi aur value abcd bann jayegi
// console.log(newObject);
