const data = [
  {
    title: "Home",
  },
  {
    title: "Products",
    children: [
      {
        title: "Laptops",
        children: [
          {
            title: "Gaming Laptops",
          },
          {
            title: "Business Laptops",
          },
        ],
      },
      {
        title: "Phones",
        children: [
          {
            title: "Android",
          },
          {
            title: "iPhone",
          },
        ],
      },
    ],
  },
  {
    title: "About",
  },
  {
    title: "Support",
    children: [
      {
        title: "Contact Us",
      },
      {
        title: "FAQ",
        children: [
          {
            title: "Shipping",
          },
          {
            title: "Returns",
          },
        ],
      },
    ],
  },
];

const form = document.getElementById("itemForm");
const btn = document.getElementById("btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const itemName = document.getElementById("item").value.trim();
  const parentPath = document.getElementById("parentSelect").value;
  if (!itemName) return alert("Please enter a title");
  addItemToData(data, parentPath, { title: itemName });
  // Re-render menu and dropdown
  menu.innerHTML = "";
  menu.appendChild(renderMenu(data));
  updateParentSelect();
  form.reset();
});

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

const addItemToData = (items, path, newItem) => {
  if (!path) {
    items.push(newItem);
    return;
  }
  for (const item of items) {
    const currentPath = path.split(" > ");
    if (item.title === currentPath[0]) {
      if (currentPath.length === 1) {
        item.children = item.children || [];
        item.children.push(newItem);
        return;
      } else {
        addItemToData(
          item.children || (item.children = []),
          currentPath.slice(1).join(" > "),
          newItem
        );
        return;
      }
    }
  }
};

// READ
const renderMenu = (items) => {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    // const a = document.createElement("a");
    // a.textContent = item.title;
    // li.appendChild(a);
    li.textContent = item.title;
    // li.classList.add("list-group-item", "border-0", "px-2");
    if (item.children) {
      li.appendChild(renderMenu(item.children));
    }
    ul.appendChild(li);
  });
  return ul;
};

menu.appendChild(renderMenu(data));
updateParentSelect();
