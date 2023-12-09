window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}









// Get inputs from DOM.(const amountUI = document.getElementById("loan-amount"))
// Put default values in inputs (const values = { amount: 500, years: 5, rate:5};)
// Call function to calculate current monthly payment (update();)
function setupIntialValues() {
  const values = { amount: 500, years: 5, rate:5};
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

// Get current values from UI (let curVal = getCurrentUIValues())
// Update monthly payment (updateMonthly(calculateMonthlyPayment(currentUIValues));)
function update() {
  let currentUIValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

//  object of values 
// calculate monthly payment.  (100*(.020/12)/(1-(1+(0.020/12))^-(3*12))
// always has 2 decimal places. ( use .toFixed)
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
