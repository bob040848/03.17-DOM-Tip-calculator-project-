const billInput = document.getElementById("bill-input");

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
    alert("Please enter a bill amount.");
    return;
  }
  const tipPer = parseFloat(event.target.textContent.replace("%", ""));

  const totalAmount = calTotal(billInput.value, tipPer);

  total.innerText = `Total ${totalAmount}`;
});

const resButton = document.getElementById("reset-button");
resButton.addEventListener("click", () => {
  billInput.value = "";
  total.innerText = "0.00";
});
