// filter method 
//❣️❣️The filter() method creates a new array filled with elements 
//that pass a test provided by a function. 
//The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.



//difference Map and Filter
//❣️❣️map creates a new array by transforming 
//every element in an array individually. 
//filter creates a new array by removing elements that don't belong.


const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);