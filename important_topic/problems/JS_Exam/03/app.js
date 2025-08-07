const transactions = [
  { category: "Food", amount: 20 },
  { category: "Transport", amount: 15 },
  { category: "Food", amount: 30 },
  { category: "Entertainment", amount: 50 },
  { category: "Transport", amount: 25 },
  { category: "Utilities", amount: 80 },
  { category: "Entertainment", amount: 30 },
];

const groupByCategory = transactions.reduce((acc, item) => {
  if (Object.keys(acc).includes(item.category)) {
    acc[item.category] = acc[item.category] + item.amount;
  } else {
    acc[item.category] = item.amount;
  }
  return acc;
}, {});
console.log(groupByCategory);

const dataTableBody = document.getElementById("dataTableBody");

for (let item in groupByCategory) {
  const tr = document.createElement("tr");
  const tdCategory = document.createElement("td");
  const tdTotalAmount = document.createElement("td");
  tdCategory.textContent = item;
  tdTotalAmount.textContent = groupByCategory[item];
  tr.appendChild(tdCategory);
  tr.appendChild(tdTotalAmount);
  dataTableBody.appendChild(tr);
}
