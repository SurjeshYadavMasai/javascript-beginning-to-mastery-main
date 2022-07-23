// splice method 
// start , delete , insert 

//❣️❣️The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2); //index 1 se start hoke 2 element delete kr do
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item'); ////index 1 se start hoke 0 element delete kr do aur ak insert kr do, index 1 pe

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2") // index 1 se start hoke 2 element delete kr do aur 2 insert kr do
console.log("delted item", deletedItem);
console.log(myArray);