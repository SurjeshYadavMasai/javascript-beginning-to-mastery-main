// fill method

//❣️❣️The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.



// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);   // ) Index 2 se ak jyada, se index 5 se ak km tk ko 0 se fill kr dega
console.log(myArray);  