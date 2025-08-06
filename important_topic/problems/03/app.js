const rawData = [
  { id: 1, title: "Home" },
  { id: 2, title: "Products" },
  { id: 3, title: "Laptops", parentId: 2 },
  { id: 4, title: "Gaming Laptops", parentId: 3 },
  { id: 5, title: "Business Laptops", parentId: 3 },
  { id: 6, title: "Phones", parentId: 2 },
  { id: 7, title: "Android", parentId: 6 },
  { id: 8, title: "iPhone", parentId: 6 },
  { id: 9, title: "About" },
  { id: 10, title: "Support" },
  { id: 11, title: "Contact Us", parentId: 10 },
  { id: 12, title: "FAQ", parentId: 10 },
  { id: 13, title: "Shipping", parentId: 12 },
  { id: 14, title: "Returns", parentId: 12 },
];

// Convert from raw data to nested data
const buildTree = (data, parentId) =>
  data
    .filter((item) => item.parentId === parentId)
    .map((item) => {
      const children = buildTree(data, item.id);
      return children.length > 0
        ? { id: item.id, title: item.title, children: children }
        : { id: item.id, title: item.title };
    });
const nestedData = buildTree(rawData);
console.log(nestedData);

// Render Menu
const menu = document.getElementById("menu");
const renderMenu = (data) => {
  const ul = document.createElement("ul");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    if (item.children) li.appendChild(renderMenu(item.children));
    ul.appendChild(li);
  });
  return ul;
};
menu.appendChild(renderMenu(nestedData));

// Render Options
const parentSelect = document.getElementById("parentSelect");
const renderOption = (data) => {
  data.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item.title;
    option.value = item.id;
    parentSelect.appendChild(option);
  });
};
// renderOption(rawData);

// Render Nested Options
const renderNestedOptions = (data, depth = 0) => {
  data.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = `${"\u00A0".repeat(depth * 4)} ${item.title}`;
    option.value = item.id;
    parentSelect.appendChild(option);
    if (item.children) {
      renderNestedOptions(item.children, depth + 1);
    }
  });
};
renderNestedOptions(nestedData);

// Save to rawData
const btn = document.getElementById("btn");
const form = document.getElementById("itemForm");
btn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById("item").value.trim();
  const parentId = document.getElementById("parentSelect").value;
  const id = rawData.at(-1).id + 1;

  if(!title) alert("You must enter the title.")
  if (parentId) {
    rawData.push({ id, title, parentId: Number(parentId) });
  } else {
    rawData.push({ id, title });
  }

  const nestedData = buildTree(rawData);
  menu.innerHTML = "";
  menu.appendChild(renderMenu(nestedData));
  renderOption(rawData);
  form.reset();
});
