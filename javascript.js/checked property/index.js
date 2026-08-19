//.checked property = property that determines whether a checkbox is checked or not
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const subResult = document.getElementById("subResult");
mySubmit.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = "You have accepted the terms and conditions.";
    }
    else {
        subResult.textContent = "You have not accepted the terms and conditions.";
    }
    if(visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa as your payment method.";
    }
    else if(masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard as your payment method.";
    }
    else if(payPalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal as your payment method.";
    }
    else {
        paymentResult.textContent = "You have not selected a payment method.";
    }
}