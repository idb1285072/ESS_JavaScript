# for loops, while loops, do...while loops

> Loops are used to handle repetitive tasks

## for loops

- when we know exact number of iteration

```js
const tbody = document.getElementById("dataTableBody");

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${
          user.active
            ? '<span class="badge bg-success">Active</span>'
            : '<span class="badge bg-danger">Inactive</span>'
        }</td>
        <td>${user.joined.toLocaleDateString()}</td>
        <td>${
          user.tags.length
            ? user.tags.join(", ")
            : '<em class="text-muted">None</em>'
        }</td>
        <td>${user.location.city}, ${user.location.country}</td>
      `;
  tbody.appendChild(row);
}
```

## while loops

- when we don't know exact number of iteration

```js
var isRunning = true;
while (isRunning) {
  const rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner");
    isRunning = false;
  } else {
    console.log("You have got " + rand);
  }
}
```

## do...while loops

- when we don't know exact number of iteration and we need to execute the loop block at least once

```js
document.getElementById("admin").addEventListener("click", (event) => {
  event.preventDefault();
  const correctPassword = "@murad123";
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
```
