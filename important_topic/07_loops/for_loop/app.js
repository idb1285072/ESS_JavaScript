const users = [
  {
    id: 1,
    name: "Alice",
    active: true,
    joined: new Date("2023-01-15"),
    tags: ["admin", "editor"],
    location: { city: "Dhaka", country: "BD" },
  },
  {
    id: 2,
    name: "Bob",
    active: false,
    joined: new Date("2022-11-03"),
    tags: ["viewer"],
    location: { city: "Chittagong", country: "BD" },
  },
  {
    id: 3,
    name: "Charlie",
    active: true,
    joined: new Date("2021-06-21"),
    tags: ["editor", "reviewer"],
    location: { city: "Sylhet", country: "BD" },
  },
  {
    id: 4,
    name: "Diana",
    active: false,
    joined: new Date("2020-09-10"),
    tags: [],
    location: { city: "Khulna", country: "BD" },
  },
  {
    id: 5,
    name: "Ethan",
    active: true,
    joined: new Date("2023-03-05"),
    tags: ["admin"],
    location: { city: "Rajshahi", country: "BD" },
  },
  {
    id: 6,
    name: "Farah",
    active: true,
    joined: new Date("2022-12-12"),
    tags: ["editor"],
    location: { city: "Barisal", country: "BD" },
  },
  {
    id: 7,
    name: "George",
    active: false,
    joined: new Date("2021-08-30"),
    tags: ["viewer", "reviewer"],
    location: { city: "Rangpur", country: "BD" },
  },
  {
    id: 8,
    name: "Hira",
    active: true,
    joined: new Date("2020-05-18"),
    tags: ["admin", "reviewer"],
    location: { city: "Mymensingh", country: "BD" },
  },
  {
    id: 9,
    name: "Imran",
    active: false,
    joined: new Date("2023-07-01"),
    tags: ["editor"],
    location: { city: "Dhaka", country: "BD" },
  },
  {
    id: 10,
    name: "Joya",
    active: true,
    joined: new Date("2022-02-22"),
    tags: ["viewer"],
    location: { city: "Sylhet", country: "BD" },
  },
];

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
