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
        ? { title: item.title, children }
        : { title: item.title };
    });

// render menu
const menu = document.getElementById("menu");
const renderMenu = (items) => {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    if (item.children) {
      li.appendChild(renderMenu(item.children));
    }
    ul.appendChild(li);
  });
  return ul;
};

const btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("item").value.trim();
  const parentId = document.getElementById("parentSelect").value;
  console.log(title, parentId);
  const lastId = rawData.pop().id;
  console.log(lastId);
  newData = { id: lastId + 1, title: title, parentId: parentId };
  rawData.push(newData);
  updateParentSelect();
});

const nestedData = buildTree(rawData);
console.log(rawData);
console.log(nestedData);
menu.appendChild(renderMenu(nestedData));

const buildParentOptions = (items, depth = 0, path = "") => {
  let options = "";
  items.forEach((item) => {
    const fullPath = path ? `${path} > ${item.title}` : item.title;
    const indent = "&nbsp;".repeat(depth * 4);
    options += `<option value="${fullPath}">${indent} ${item.title}</option>`;
    if (item.children) {
      options += buildParentOptions(item.children, depth + 1, fullPath);
    }
  });
  return options;
};

const updateParentSelect = () => {
  const select = document.getElementById("parentSelect");
  select.innerHTML =
    `<option value="">-- Select Parent --</option>` + buildParentOptions(data);
};
