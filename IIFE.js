//(Immediately Invoked Function Expression)
//it is used to immediately call a function and to reduce the pollution created by global scope
//An IIFE (Immediately Invoked Function Expression) creates a private scope.

// (function fun(){
//     //named iife
//     console.log("i am doing fun")
// })();

// ( (name)=> console.log(`this is superb,${name}`))("akshita")

let marks=0;
// (()=>{
//      let marks=30
//     console.log(marks);
// })();
function stu(){
    let marks=30;
  //  console.log(marks);
}

console.log(marks);