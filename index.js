const billInput = document.getElementById("bill-input");
// const reset = document.getElementById("reset-button");

const sanitizeBillInput = (input) => {
  input = input.replace(/[^\d.]/g, "");

  if ((input.match(/\./g) || []).length > 1) {
    input = input.slice(0, -1);
  }
  return input;
};

billInput.addEventListener("input", (event) => {
  billInput.value = sanitizeBillInput(event.target.value);
});

const total = document.getElementById("total");
const tips = document.getElementById("tips");

const calTotal = (bill, tipPercent) => {
  const billTotal = parseFloat(bill);
  const tipTotal = (billTotal * tipPercent) / 100;
  return (billTotal + tipTotal).toFixed(2);
};

tips.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  if (!billInput.value) {
  }
});
