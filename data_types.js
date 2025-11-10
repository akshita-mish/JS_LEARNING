//datatypes in js 
//string , number,boolean,null,undefined,BigInt,symbol
const name="Rahul";
// console.log(typeof(name)); //type of gives a type of data
 const age=19
//  console.log(typeof(age)); 
 const big=1223845949685649578953n;
 console.log(typeof(big));

 //symbol= symbol is a unique value , even if two symbol have same description
 const a=Symbol("Id");
 const b=Symbol("Id")
 console.log(a==b); //false because they are unique
