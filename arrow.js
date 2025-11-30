//introduced in ES6
// const greet1=()=>{
//     console.log("hello user1")
// }

// const greet2=()=> console.log("hello user2")

// const greet3=()=> (console.log("hello user3"))
// greet1();
// greet2();
// greet3();

/*const add=(n1,n2)=>{
    return  n1+n2;}*/

const add=()=> console.log(this);


add(2,3);
