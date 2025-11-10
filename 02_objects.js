//by constructor
const tinderUser=new Object();

//assigning values
tinderUser.name="Rohan";
tinderUser.age=20;
tinderUser.city="Delhi";
// console.log(tinderUser);

//nested objects
const reguUser={
    email:"abir@gmail.com",
    fullname:{
        username:{
            firstname:"Abir",
            Lastname:"Sharma"
        }
    }
}
// console.log(reguUser.fullname.username.firstname);

//concate objects
const obj1={"a":1,"b":2};
const obj2={"c":3,"d":4};
const obj3={"e":5,"f":6};
// const obj4={obj1,obj2}; //here obj1 is a source in which values are assigned 
// const obj5= Object.assign({},obj1,obj2,obj3);
const obj6={...obj1,...obj2,...obj3}; //spreading of objects
// console.log(obj6);
// console.log(tinderUser.hasOwnProperty("city"));
const user=[
    { name:"akshita",
        age:19,
    },
    {
        name:"anjali",
        age:23,
    }
]
console.log(user[0].name.length);
