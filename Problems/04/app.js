const users = [
  {
    id: 1,
    name: "Murad Hossen",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Raj Khan",
    email: "raj@example.com",
    age: 34,
  },
  {
    id: 3,
    email: "raju@example.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Hassan Ali",
    age: 40,
  },
  {
    name: "Forhad Ahmed",
    id: 5,
    email: "forhad@example.com",
    isActive: false,
  },
];

const data = [
  { id: 1, name: "Murad", age: 28 },
  { id: 2, email: "raj@example.com" },
  { id: 3, name: "Rana", isActive: true },
  { name: "Miraj", age: 40, phone: "123-456-7890" },
];

const printTable = (data) => {
  // const allKeys = [...new Set(data.map(d=>Object.keys(d)).flat(1))]
  const allKeys = [...new Set(data.flatMap((obj) => Object.keys(obj)))];
  console.log(allKeys);
  /*
  map
  [
    [id, name, age],
    [id, email],
    [id, name, isActive],
    [name, age, phone]
  ]
  flat
  [id, name, age, id, email, id, name, isActive, name, age, phone]
  set
  [id, name, age, email, isActive]
  */
  const table = document.getElementById("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  allKeys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  data.forEach((obj) => {
    const row = document.createElement("tr");
    allKeys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key] !== undefined ? obj[key] : "";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
};
printTable(users);
