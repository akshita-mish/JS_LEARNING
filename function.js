 // function is a set of code that completes a task
// function add(){
//     console.log("this is a function for addition of two number");

// }

function addition(num1,num2){
   return num1+num2;
}

//console.log(addition(2,3));
//craete  a new variable to  store returned value
// const res=addition(2,3);
// console.log(res);

function greeting(username){
    return `${username}, Welcome to our channel`;
}
//console.log(greeting("Akshita"));
console.log(greeting(' '));  // null string as argument
console.log(greeting()); //it will take it as undefined so that we need to use conditionals 

//functions with objects
const user={
    order:"headphone",
    price:1000,
    discount:100,
    total_price:900
};

function Order(obj){
    return `your order is ${user.order} and total price is ${user.total_price}`;
}

console.log(Order(user));

//-------------------------------INTERESTING--------------------------------------------
console.log(addOne(5)); // it will not give any error even if it is called before the function definiton

function addOne(num1){
    return num1+1;
}

//addTwo(); //ReferenceError: Cannot access 'addTwo' before initialization

//it is called expression too
const addTwo=function(num2){
    return num2+1;
}
console.log(addTwo(5));
