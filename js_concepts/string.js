//ways to create string in js
const firstname="Akshita";
const lastname='Mishra';
console.log(`Hello my name is ${firstname} ${lastname} `);

//string properties
console.log(firstname.length);//7

 console.log(firstname.charAt(4));//i

 console.log(firstname.toUpperCase());//AKSHITA
 console.log(firstname.toLowerCase());//akshita

console.log(firstname.includes("ita"));//true

console.log(firstname.indexOf('a')); ///gives the last index if char repeates

const username="this_is_fab"
console.log(username.slice(3,8)); // does not chnage the original string and second parameter is exclusive
const fruit="        banana      "
console.log(fruit.trim());//removes white spaces 
console.log("hi rohan".replace("rohan","rahul"));

const flower="lotus,rose,lily,sunflower";
console.log(flower.split("/ "));


