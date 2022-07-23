function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}
//❣️❣️❣️❣️ call
// user2 me about method use krne ke liye
// Isse about function me present  this ki value user2 ho jayegi
about.call(user2, "guitar", "moazrt"); //ye arguments console me likhe extra variable ki value ho jayegi




// ❣️❣️❣️❣️apply
//Apply me extra arguments  array me  paas krne hote h bss,, 
//baaki sb same h Call ki tarah
about.apply(user1, ["guitar", "bach"]); //ye arguments console me likhe extra variable ki value ho jayegi




// ❣️❣️❣️❣️Bind
// Bind ak function return krta h aur sb same h Unn dono ki tarh
const func = about.bind(user2, "guitar", "bach"); //ye arguments console me likhe extra variable ki value ho jayegi
func();
