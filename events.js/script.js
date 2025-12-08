// Events = so and events is something that happens to our browser (clicking on a button, clicking keyboard)
//using property

// btn.onclick=function(){
//     console.log("yey, you clicked it");
// }

//Event objects= when a event happens , js gives its object that gives essential details
//event bubbling =➡️ child → parent → document(bydefalut set , false)

 //const btn= document.querySelector("button");
// btn.addEventListener('click',function(e){
//    console.log(e.target);
   
// });

// const li=document.querySelector(".img");
// li.addEventListener('click',function(e){
//     if(e.target.tagName==="IMG"){
//         console.log(e.target.id);
//     }else if(e.target.tagName==="BUTTON"){
//         e.target.innerHTML="yay";
//     }

// });

const gp= document.getElementById("grandparent");
const parent=document.getElementById("parent");
const child= document.getElementById("child");
// events bubbling
// gp.addEventListener('click',function(){
//     console.log("gp");
// });
// parent.addEventListener('click',(e)=>console.log("parent"));
// child.addEventListener('click',(e)=> {
//     e.stopPropagation();
//     console.log(e.target.id);
// });

//Event capturing
gp.addEventListener('click',function(e){
    console.log("gp");
     
   // e.stopPropagation();
},true);
parent.addEventListener('click',(e)=>{
   
     e.stopPropagation();
      console.log("parent")
},true);
child.addEventListener('click',(e)=> {
    console.log("child")
   
},true);

