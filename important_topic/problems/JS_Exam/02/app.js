const rawData = [
  { id: 0, parent: "Fruits", child: "Apple", parentIndex: 0 },
  { id: 1, parent: "Vegetables", child: "Toto", parentIndex: 0 },
  { id: 2, parent: "Vegetables", child: "Toto", parentIndex: 1 },
];

const buildTree = (data, parentIndex) =>
  data
    .filter((item) => item.parentIndex === parentIndex)
    .map((item) => {
      const children = buildTree(data, item.id);
      console.log(children);
      return children.length > 0
        ? { id: item.id, child: item.child, children: children }
        : { id: item.id, child: item.child };
    });
const nestedData = buildTree(rawData);
console.log(nestedData);

// Render Menu
const menu = document.getElementById("menu");
const renderMenu = (data) => {
  const ul = document.createElement("ul");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.child;
    if (item.children) li.appendChild(renderMenu(item.children));
    ul.appendChild(li);
  });
  return ul;
};
menu.appendChild(renderMenu(nestedData));

const form = document.getElementById("form");
document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  const parent = document.getElementById("parent").value;
  const child = document.getElementById("child").value;
  const parentIndex = document.getElementById("parentIndex").value;
  console.log(parent, child, parentIndex);
  const id = rawData.at(-1).id + 1;
  rawData.push({ id, parent, child, parentIndex: Number(parentIndex) });
  const nestedData = buildTree(rawData);
  console.log(rawData)
  menu.innerHTML = "";
  menu.appendChild(renderMenu(nestedData));
  form.reset();
});
