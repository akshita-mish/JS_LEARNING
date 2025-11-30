//this keyword= specify the current context
//console.log(this); //in node environment this implies empty and on console specifies window
 
//this in object 
/*const user={
   
    name:"rohan",
    place:"noida",
    greet:function(){
         console.log(this)
        return `hey i am ${this.name} from  ${this.place}`;
        
    }
  
}
console.log(user.greet())
//changing the name and place 
user.name="aditi"
user.place="delhi"
console.log(user.greet()) *///here this is specifying aditi and delhi not rohan and noida

//this in functions

const hello=()=>{
    console.log(this);
}

hello()

