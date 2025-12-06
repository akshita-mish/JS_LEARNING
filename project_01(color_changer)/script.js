const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
const heading=document.querySelectorAll('h1')

buttons.forEach( function (button) {
     button.addEventListener('click',function(e){
       console.log(e.target.id);
        if(e.target.id=="grey"){
            body.style.backgroundColor=e.target.id; 
            heading.forEach(function(h1){
                h1.style.color='pink';
            })       
        }
         if(e.target.id=="white"){
            body.style.backgroundColor=e.target.id; 
            heading.forEach(function(h1){
                h1.style.color='red';
            })        
        }
         if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id; 
            heading.forEach(function(h1){
                h1.style.color='black';
            })        
        }
         if(e.target.id=="yellow"){
            body.style.backgroundColor=e.target.id;
            heading.forEach(function(h1){
                h1.style.color='green';
            })         
        }
    })

});