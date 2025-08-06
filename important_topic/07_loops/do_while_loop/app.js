document.getElementById("admin").addEventListener("click", (event) => {
  event.preventDefault();
  const correctPassword = "murad123";
  let attempts = 0;
  let input;

  do {
    input = prompt("Enter your password:");
    attempts++;

    if (input === correctPassword) {
      alert("Access granted!");
      break;
    } else {
      alert(`Incorrect. Attempt ${attempts} of 3.`);
    }
  } while (attempts < 3);

  if (input !== correctPassword) {
    alert("Too many failed attempts. Access denied.");
  }
});
