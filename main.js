const rateService = document.getElementById("rate-service");
const calc = document.querySelector(".submit")
let output = document.querySelector(".calculatedResult");

let total = 0;
let rate = null;

function calculate(){
    const billAmount = Number(document.getElementById("bill-amount").value);
    const personNumber = Number(document.getElementById("person-number").value);
    if (rateService.disabled == false){
        serviceRate();
        total = (billAmount + billAmount*rate)/personNumber;

    }
    else{ 
        
        total = billAmount / personNumber;
    }
    
    output.textContent = total.toFixed(2);
    //output.style.visibility = 'visible';
}

calc.addEventListener('click', calculate);


function enableRate(){
    rateService.disabled = enableTip.checked? false:true;
}
function serviceRate(){
    const choice = rateService.value;

    switch(choice){
        case "excellent":
            rate = 0.3;
            break;
        case "good":
            rate = 0.2;
            break;
        case "okay":
            rate = 0.15;
            break;
        case "bad":
            rate = 0.1;
            break;
        case "terrible":
            rate = 0.05;
            break;
    }
    return rate;
}
