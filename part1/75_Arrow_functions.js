// arrow functions 
// arrow function ka this nahi hota
// arrow funtion this apne ak level up se leta h, apne surrounding se
// arrow function ke this ko Call/bind/apply se bhi change nahi kr sakte
const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);