//singleton  (constructor always makes singleton) , but literal doesn't
//object literals
 //creation of object
 const mySym= Symbol("key1")
const user={
    name:"Sahil",
    [mySym]:"hello",
    age:45,
    email:"sahil@gmail.com",
    location:"delhi"
}

//access the object 
console.log(user.name);
//another way to access
console.log(user["age"]) //its good and better
//change the element of object 
user.name="Ritvik"
console.log(user["name"])

//if we want to make the object unchangeable
Object.freeze(user); //freez is used
user.age=19
console.log(user[mySym]); 
console.log(user);

//function in objects
user.greeting=function(){
    console.log("Hello js ");
}
 user.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
 }
 console.log(user.greeting());
 console.log(user.greetingTwo());
