// optional chaining 

//The optional chaining ‘?.’ 
// is an error-proof way to access nested
//  object properties, even if an intermediate
//  property doesn’t exist. It was recently 
// introduced by ECMA International, 
// Technical Committee 39 – 
// ECMAScript which was authored by Claude Pache,
//  Gabriel Isenberg, Daniel Rosenwasser, 
// Dustin Savery. 
// It works similar to Chaining ‘.’
//  except that it does not report the error, 
// instead it returns a value which is undefined. 
// It also works with function call
//  when we try to make a call to a method which may not exist.

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber); ///isse eror nahi aayega