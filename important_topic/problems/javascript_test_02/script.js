// === User Setup ===
const users = [
  { id: 1, username: "user1", password: "@user1" },
  { id: 2, username: "user2", password: "@user2" },
  { id: 3, username: "user3", password: "@user3" },
  { id: 4, username: "user4", password: "@user4" },
  { id: 5, username: "user5", password: "@user5" },
];

// const bookingStatus = [
//   { day: 1, status: "Available" },
//   { day: 2, status: "Available" },
//   { day: 3, status: "Available" },
//   { day: 4, status: "Available" },
//   { day: 5, status: "Available" },
//   { day: 6, status: "Available" },
//   { day: 7, status: "Available" },
//   { day: 8, status: "Available" },
//   { day: 9, status: "Available" },
//   { day: 10, status: "Available" },
//   { day: 11, status: "Available" },
//   { day: 12, status: "Available" },
//   { day: 13, status: "Available" },
//   { day: 14, status: "Available" },
//   { day: 15, status: "Available" },
//   { day: 16, status: "Available" },
//   { day: 17, status: "Available" },
//   { day: 18, status: "Available" },
//   { day: 19, status: "Available" },
//   { day: 20, status: "Available" },
//   { day: 21, status: "Available" },
//   { day: 22, status: "Available" },
//   { day: 23, status: "Available" },
//   { day: 24, status: "Available" },
//   { day: 25, status: "Available" },
//   { day: 26, status: "Available" },
//   { day: 27, status: "Available" },
//   { day: 28, status: "Available" },
// ];
const bookingStatus = [];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

if (!localStorage.getItem("status")) {
  localStorage.setItem("status", JSON.stringify(bookingStatus));
}

// === Cookie Helpers ===
function generateToken(length = 32) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}
function setCookie(name, value, minutes) {
  const d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}
function getCookie(name) {
  const cname = name + "=";
  const ca = document.cookie.split(";");
  for (let c of ca) {
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(cname) === 0) return c.substring(cname.length);
  }
  return "";
}
function eraseCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// === Auth Functions ===
function login(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = generateToken();
    setCookie("auth_token", token, 30);
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "calendar.html";
  } else {
    alert("Invalid username or password");
  }
}
function logout() {
  eraseCookie("auth_token");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
function isLoggedIn() {
  return getCookie("auth_token") && localStorage.getItem("currentUser");
}

// === Login Page Script ===
if (document.getElementById("login")) {
  document.getElementById("login").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    login(username, password);
  });
}

// === Calendar Page Script ===
// if (document.getElementById("calendar-body")) {
//   if (!isLoggedIn()) {
//     window.location.href = "index.html";
//   }
//   const todayDate = new Date();
//   const today = todayDate.getDate();
//   console.log(today);

//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   let statusList = JSON.parse(localStorage.getItem("status")) || [];
//   const calendarBody = document.getElementById("calendar-body");
//   console.log(statusList);
//   const firstDayOfMonth = new Date(
//     todayDate.getFullYear(),
//     todayDate.getMonth(),
//     1
//   );
//   const lastDayOfMonth = new Date(
//     todayDate.getFullYear(),
//     todayDate.getMonth() + 1,
//     0
//   );
//   // const totalDays = 28;
//   // const startDay = 4;
//   const startDay = firstDayOfMonth.getDay();
//   const totalDays = lastDayOfMonth.getDate();
//   console.log("start day", startDay, totalDays);

//   function renderCalendar() {
//     calendarBody.innerHTML = "";
//     let day = 1;
//     let row = document.createElement("tr");

//     for (let i = 0; i < startDay; i++) {
//       row.appendChild(emptyCell());
//     }

//     while (day <= totalDays) {
//       if (row.children.length === 7) {
//         calendarBody.appendChild(row);
//         row = document.createElement("tr");
//       }
//       const currentDay = day;
//       const cell = document.createElement("td");
//       const wrapper = document.createElement("div");
//       wrapper.classList.add("d-flex", "flex-column", "align-items-center");

//       const btn = document.createElement("button");
//       btn.textContent = currentDay;
//       btn.style.width = "100%";
//       btn.style.borderRadius = ".75rem";

//       const statusLabel = document.createElement("small");
//       statusLabel.classList.add("fw-bold", "mt-1");

//       const dayStatus = statusList.find((d) => d.day === currentDay);
//       // const todayDate = new Date();
//       // const today = todayDate.getDate();
//       // console.log(today);

//       if (day < today || day % 7 === 2 || day % 7 === 3) {
//         console.log(day, today);
//         btn.classList.add("booked");
//         btn.disabled = true;
//         btn.textContent = currentDay + " 🔒";
//         statusLabel.textContent = "Unavailable";
//         statusLabel.classList.add("text-danger");
//       } else if (dayStatus && dayStatus.status === "Booked") {
//         btn.classList.add("booked");
//         btn.disabled = true;
//         const user = users.find((u) => u.id === dayStatus.userId);
//         const username = user ? user.username : "Unknown";
//         btn.textContent = currentDay + " 🔒";
//         statusLabel.textContent = "Booked by " + username;
//         statusLabel.classList.add("text-danger");
//       } else {
//         btn.classList.add("available");
//         btn.addEventListener("click", () => bookDate(currentDay));
//         statusLabel.textContent = "Available";
//         statusLabel.classList.add("text-success");
//       }

//       wrapper.appendChild(btn);
//       wrapper.appendChild(statusLabel);
//       cell.appendChild(wrapper);
//       row.appendChild(cell);
//       day++;
//     }

//     // fill remaining cells
//     while (row.children.length < 7) {
//       row.appendChild(emptyCell());
//     }
//     calendarBody.appendChild(row);
//   }

//   function emptyCell() {
//     const td = document.createElement("td");
//     td.classList.add("empty");
//     return td;
//   }

//   function bookDate(day) {
//     const dayStatus = statusList.find((d) => d.day === day);
//     if (dayStatus && dayStatus.status === "Booked") return;

//     const existingIndex = statusList.findIndex((d) => d.day === day);
//     if (existingIndex > -1) {
//       statusList[existingIndex] = {
//         day,
//         userId: currentUser.id,
//         status: "Booked",
//       };
//     } else {
//       statusList.push({ day, userId: currentUser.id, status: "Booked" });
//     }

//     localStorage.setItem("status", JSON.stringify(statusList));
//     alert("You booked day " + day + " ✅");
//     renderCalendar();
//   }
//   document.getElementById("logout").addEventListener("click", logout);
//   renderCalendar();
// }

// === Calendar Page Script ===
if (document.getElementById("calendar-body")) {
  if (!isLoggedIn()) {
    window.location.href = "index.html";
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let statusList = JSON.parse(localStorage.getItem("status")) || [];
  const calendarBody = document.getElementById("calendar-body");

  // Track displayed month and year
  let displayedDate = new Date(); // starts with current month

  // Add Next Month button
  const calendarDiv = document.querySelector(".calendar");
  const nextMonthBtn = document.createElement("button");
  nextMonthBtn.textContent = "Next Month →";
  nextMonthBtn.classList.add("btn", "btn-primary", "mb-3");
  nextMonthBtn.style.float = "right";
  calendarDiv.insertBefore(nextMonthBtn, calendarDiv.querySelector("table"));

  nextMonthBtn.addEventListener("click", () => {
    // move to next month
    displayedDate.setMonth(displayedDate.getMonth() + 1);
    renderCalendar();
  });

  function renderCalendar() {
    calendarBody.innerHTML = "";

    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    let day = 1;
    let row = document.createElement("tr");

    for (let i = 0; i < startDay; i++) {
      row.appendChild(emptyCell());
    }

    while (day <= totalDays) {
      if (row.children.length === 7) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }
      const currentDay = day;
      const cell = document.createElement("td");
      const wrapper = document.createElement("div");
      wrapper.classList.add("d-flex", "flex-column", "align-items-center");

      const btn = document.createElement("button");
      btn.textContent = currentDay;
      btn.style.width = "100%";
      btn.style.borderRadius = ".75rem";

      const statusLabel = document.createElement("small");
      statusLabel.classList.add("fw-bold", "mt-1");

      const dayStatus = statusList.find(
        (d) => d.day === currentDay && d.month === month && d.year === year
      );

      const todayDate = new Date();
      const today = todayDate.getDate();
      const isCurrentMonth =
        todayDate.getMonth() === month && todayDate.getFullYear() === year;

      // Disable past days
      //       if (day < today || day % 7 === 2 || day % 7 === 3) {
      //         console.log(day, today);
      //         btn.classList.add("booked");
      //         btn.disabled = true;
      //         btn.textContent = currentDay + " 🔒";
      //         statusLabel.textContent = "Unavailable";
      //         statusLabel.classList.add("text-danger");
      //       } else
      if (
        (isCurrentMonth && day < today) ||
        day % 7 === 2 ||
        day % 7 === 3 ||
        dayStatus?.status === "Booked"
      ) {
        btn.classList.add("booked");
        btn.disabled = true;
        btn.textContent = currentDay + " 🔒";
        statusLabel.textContent = dayStatus
          ? `Booked by ${
              users.find((u) => u.id === dayStatus.userId)?.username ||
              "Unknown"
            }`
          : "Unavailable";
        statusLabel.classList.add("text-danger");
      } else {
        btn.classList.add("available");
        btn.addEventListener("click", () => bookDate(currentDay, month, year));
        statusLabel.textContent = "Available";
        statusLabel.classList.add("text-success");
      }

      wrapper.appendChild(btn);
      wrapper.appendChild(statusLabel);
      cell.appendChild(wrapper);
      row.appendChild(cell);
      day++;
    }

    while (row.children.length < 7) {
      row.appendChild(emptyCell());
    }
    calendarBody.appendChild(row);
  }

  function emptyCell() {
    const td = document.createElement("td");
    td.classList.add("empty");
    return td;
  }

  function bookDate(day, month, year) {
    const dayStatus = statusList.find(
      (d) => d.day === day && d.month === month && d.year === year
    );
    if (dayStatus && dayStatus.status === "Booked") return;

    const existingIndex = statusList.findIndex(
      (d) => d.day === day && d.month === month && d.year === year
    );
    if (existingIndex > -1) {
      statusList[existingIndex] = {
        day,
        month,
        year,
        userId: currentUser.id,
        status: "Booked",
      };
    } else {
      statusList.push({
        day,
        month,
        year,
        userId: currentUser.id,
        status: "Booked",
      });
    }

    localStorage.setItem("status", JSON.stringify(statusList));
    alert(`You booked ${day}/${month + 1}/${year} ✅`);
    renderCalendar();
  }

  document.getElementById("logout").addEventListener("click", logout);
  renderCalendar();
}
