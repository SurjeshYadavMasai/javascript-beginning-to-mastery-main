// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}
   

//❤️❤️ Ager key me koi 2 words hain to Brackets Notation kaa use kren access krene ke liye


console.log(person["person hobbies"]);
//Yaha key me string nahi lagani h tbhi key ki vakue email hogi
//Brna key ki value key hi rahegi
person[key] = "harshitvashisth@gmail.com"; 
console.log(person);
