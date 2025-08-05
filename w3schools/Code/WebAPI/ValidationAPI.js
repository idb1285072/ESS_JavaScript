const validateInput = () => {
  const input = document.getElementById("quantity");
  if (input.value < 1) {
    input.setCustomValidity("Value must be at least 1.");
  } else {
    input.setCustomValidity(""); // Clear error
  }

  if (!input.checkValidity()) {
    document.getElementById("result").textContent = input.validationMessage;
  } else {
    document.getElementById("result").textContent = "Input is valid.";
  }
};
