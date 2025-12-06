const form=document.querySelector("#bmiForm");
//form gives us empty values here
//const height= parseInt(docuument.querySelector("#height").value);

form.addEventListener("submit",function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const res=document.querySelector("#result");
    if(height===""|| height<0|| isNaN(height)){
        res.innerHTML="Please enter a valid height";
    }
    else if(weight===""|| weight<0|| isNaN(weight)){
        res.innerHTML="Please enter a valid weight";
    }else{
        const bmi=((weight/(height*height))*10000).toFixed(2);
        if(bmi<18.5){
            res.innerHTML=`Your BMI is ${bmi} (Underweight)`;
            return;
        }else if(bmi>=18.5 && bmi<24.9){
            res.innerHTML=`Your BMI is ${bmi} (Normal weight)`;
            return ;
        }else if(bmi>=25 && bmi<29.9){
            res.innerHTML=`Your BMI is ${bmi} (Overweight)`;
            return ;
        }else{
            res.innerHTML=`Your BMI is ${bmi} (Obesity)`;
            return;
        }

    }
});