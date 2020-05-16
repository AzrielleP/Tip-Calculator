const rateService = document.getElementById("rateService");
const calc = document.querySelector(".submit");
let output = document.querySelector(".calculatedResult");

let total = 0;
let rate = null;

function calculate() {
  const billAmount = Number(document.getElementById("billAmount").value);
  const personNumber = Number(document.getElementById("personNumber").value);

  if (billAmount == "") {
    alert("Please enter your bill amount.");
    return false;
  }

  if (personNumber == "" || personNumber == 0) {
    alert("Please enter a valid number of people.");
    return false;
  }

  if (rateService.disabled == false) {
    serviceRate();
    if (!serviceRate()) return false;
    else total = (billAmount + billAmount * rate) / personNumber;
  } else {
    total = billAmount / personNumber;
  }

  output.textContent = "$ " + total.toFixed(2);
}

calc.addEventListener("click", calculate);

function enableRate() {
  rateService.disabled = enableTip.checked ? false : true;
}

function serviceRate() {
  const choice = rateService.value;

  switch (choice) {
    case "":
      alert("Please choose from the options.");
      return false;
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
