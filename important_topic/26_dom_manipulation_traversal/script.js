let employees = [];
let nextEmployeeId = 1;

// Load data from localStorage on startup
function loadData() {
  const savedEmployees = localStorage.getItem("employees");
  if (savedEmployees) {
    employees = JSON.parse(savedEmployees);
  } else {
    employees = [];
  }

  // Get nextEmployeeId from localStorage or calculate based on max current ID
  const savedNextId = localStorage.getItem("nextEmployeeId");
  if (savedNextId) {
    nextEmployeeId = parseInt(savedNextId, 10);
  } else {
    // Find max numeric part from existing IDs, then +1
    let maxId = 0;
    employees.forEach((emp) => {
      const numPart = parseInt(emp.employeeId.replace("EMP", ""), 10);
      if (numPart > maxId) maxId = numPart;
    });
    nextEmployeeId = maxId + 1;
  }
}

// Save data to localStorage
function saveData() {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("nextEmployeeId", nextEmployeeId.toString());
}

function navigateTo(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");

  if (pageId === "insert") {
    updateNextEmployeeIdDisplay();
    document.getElementById("insertForm").reset();
  }

  if (pageId === "display") {
    renderEmployeeTable();
  }
}

function updateNextEmployeeIdDisplay() {
  document.getElementById("employeeIdDisplay").value =
    "EMP" + nextEmployeeId.toString().padStart(4, "0");
}

// Insert Form Submit
document.getElementById("insertForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const employeeId = "EMP" + nextEmployeeId.toString().padStart(4, "0");
  const employeeName = document.getElementById("employeeName").value.trim();
  const joinDate = document.getElementById("joinDate").value;
  const isMarried = document.getElementById("isMarried").checked;
  const salary = parseFloat(document.getElementById("salary").value);

  const pictureInput = document.getElementById("picture");
  if (pictureInput.files.length === 0) {
    alert("Please select a picture.");
    return;
  }
  const file = pictureInput.files[0];

  const reader = new FileReader();
  reader.onload = function (event) {
    const pictureDataUrl = event.target.result;

    employees.push({
      employeeId,
      employeeName,
      joinDate,
      isMarried,
      salary,
      picture: pictureDataUrl,
    });

    nextEmployeeId++;
    saveData();
    alert("Employee added!");
    navigateTo("display");
  };
  reader.readAsDataURL(file);
});

// Render Employee Table
function renderEmployeeTable() {
  const tbody = document.getElementById("employeeTableBody");
  tbody.innerHTML = "";

  if (employees.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center">No employees found.</td></tr>`;
    return;
  }

  employees.forEach((emp, index) => {
    const row = document.createElement("tr");

    const picTd = document.createElement("td");
    const img = document.createElement("img");
    img.src = emp.picture || "https://via.placeholder.com/80?text=No+Image";
    img.alt = emp.employeeName;
    img.classList.add("employee-pic");
    picTd.appendChild(img);

    row.appendChild(picTd);
    row.appendChild(createCell(emp.employeeId));
    row.appendChild(createCell(emp.employeeName));
    row.appendChild(createCell(emp.joinDate));
    row.appendChild(createCell(emp.isMarried ? "Yes" : "No"));
    row.appendChild(createCell(emp.salary.toFixed(2)));

    const actionsTd = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm me-2";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteEmployee(index);

    const updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-warning btn-sm";
    updateBtn.textContent = "Update";
    updateBtn.onclick = () => loadUpdatePage(index);

    actionsTd.appendChild(deleteBtn);
    actionsTd.appendChild(updateBtn);

    row.appendChild(actionsTd);

    tbody.appendChild(row);
  });
}

function createCell(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}

// Delete employee
function deleteEmployee(index) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees.splice(index, 1);
    saveData();
    renderEmployeeTable();
  }
}

// Load Update Page with employee data
function loadUpdatePage(index) {
  const emp = employees[index];
  document.getElementById("updateIndex").value = index;
  document.getElementById("updateEmployeeId").value = emp.employeeId;
  document.getElementById("updateEmployeeName").value = emp.employeeName;
  document.getElementById("updateJoinDate").value = emp.joinDate;
  document.getElementById("updateIsMarried").checked = emp.isMarried;
  document.getElementById("updateSalary").value = emp.salary;
  document.getElementById("updatePicture").value = ""; // clear file input
  document.getElementById("updatePicturePreview").src =
    emp.picture || "https://via.placeholder.com/80?text=No+Image";

  navigateTo("update");
}

// Update Form Submit
document.getElementById("updateForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const index = parseInt(document.getElementById("updateIndex").value);
  if (isNaN(index) || !employees[index]) {
    alert("Invalid employee index!");
    return;
  }

  const employeeName = document
    .getElementById("updateEmployeeName")
    .value.trim();
  const joinDate = document.getElementById("updateJoinDate").value;
  const isMarried = document.getElementById("updateIsMarried").checked;
  const salary = parseFloat(document.getElementById("updateSalary").value);

  const pictureInput = document.getElementById("updatePicture");
  if (pictureInput.files.length > 0) {
    const file = pictureInput.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      employees[index].picture = event.target.result;
      updateEmployeeData(index, employeeName, joinDate, isMarried, salary);
    };
    reader.readAsDataURL(file);
  } else {
    updateEmployeeData(index, employeeName, joinDate, isMarried, salary);
  }
});

function updateEmployeeData(index, employeeName, joinDate, isMarried, salary) {
  employees[index].employeeName = employeeName;
  employees[index].joinDate = joinDate;
  employees[index].isMarried = isMarried;
  employees[index].salary = salary;

  saveData();
  alert("Employee updated!");
  navigateTo("display");
}

// Initialize data & UI on page load
loadData();
navigateTo("insert");
