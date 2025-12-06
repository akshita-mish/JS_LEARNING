const form=document.querySelector(".form");
 //generate random number
const random_number=Math.floor(Math.random()*100)+1;
 console.log(random_number);
const msg= document.getElementById("msg");  //for printing msg 
let total_guess=5;
const guess=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const change=document.querySelector(".lowOrHi");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const userIntput=parseInt(document.getElementById("guessField").value);
    console.log(userIntput);
   if(isNaN(userIntput)){
     msg.innerHTML=`Please enter a number `;
     change.innerHTML="";
     return ;
    }
    msg.innerHTML="";
    total_guess--;
    guess.innerHTML=`Guesses left : ${total_guess}`;

    if(userIntput===random_number){
         lastResult.innerHTML = `🎉 You guessed it right! The number was ${random_number}`;
         change.innerHTML="";
         form.querySelector("input").disabled = true;
         return;
    }else if(userIntput>random_number){
        change.innerHTML="TOO high , Guess lower";
    }else{
        change.innerHTML="TOO low , Guess higher";
    }

    if(total_guess===0 && userIntput!=random_number){
        lastResult.innerHTML=`Game over! The number was ${random_number}`;
        change.innerHTML="";
        form.querySelector('input').disabled=true;
    }
        


    }
    
   
);