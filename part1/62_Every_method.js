// every method

//❣️❣️The Array.every() method considers all the 
// elements of an array  and then further checks
// that whether all the elements of the array satisfy the given condition 
//(passed by in user) or not that is provided by a method passed to 
//it as the argument //  return , true or false

// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);