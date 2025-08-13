const form = document.getElementById("form");
const parentInput = document.getElementById("parent");
const childInput = document.getElementById("child");
const parentIndexInput = document.getElementById("parentIndex");
const menuContainer = document.getElementById("menu");

// Demo data
let menuData = [
  { parent: "Fruits", children: ["Apple", "Banana", "Orange"] },
  { parent: "Vegetables", children: ["Carrot", "Broccoli"] },
  { parent: "Drinks", children: ["Water", "Coffee", "Tea"] }
];

function renderMenu() {
  menuContainer.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  menuData.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const parentText = document.createElement("strong");
    parentText.textContent = `${index + 1}. ${item.parent}`;
    li.appendChild(parentText);

    if (item.children.length > 0) {
      const childUl = document.createElement("ul");
      childUl.classList.add("mt-2");
      item.children.forEach((child) => {
        const childLi = document.createElement("li");
        childLi.textContent = child;
        childUl.appendChild(childLi);
      });
      li.appendChild(childUl);
    }
    ul.appendChild(li);
  });
  menuContainer.appendChild(ul);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const parentVal = parentInput.value.trim();
  const childVal = childInput.value.trim();
  const parentIndexVal = parseInt(parentIndexInput.value.trim(), 10);

  if (parentVal) {
    menuData.push({ parent: parentVal, children: [] });
  }

  if (childVal && !isNaN(parentIndexVal) && menuData[parentIndexVal - 1]) {
    menuData[parentIndexVal - 1].children.push(childVal);
  }

  renderMenu();
  parentInput.value = "";
  childInput.value = "";
  parentIndexInput.value = "";
});

// Initial render with demo data
renderMenu();
