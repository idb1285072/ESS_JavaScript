// === User Setup ===
const users = [
  { id: 0, username: "admin", password: "@admin123" },
  { id: 1, username: "user1", password: "@user1" },
  { id: 2, username: "user2", password: "@user2" },
  { id: 3, username: "user3", password: "@user3" },
  { id: 4, username: "user4", password: "@user4" },
  { id: 5, username: "user5", password: "@user5" },
];
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
    if (user.username === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "calendar.html";
    }
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
if (document.getElementById("calendar-body")) {
  if (!isLoggedIn()) {
    window.location.href = "index.html";
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let statusList = JSON.parse(localStorage.getItem("status")) || [];
  const calendarBody = document.getElementById("calendar-body");

  // Track displayed month and year
  let displayedDate = new Date();

  // Add Next Month button
  const nextMonthBtn = document.getElementById("next-month");
  nextMonthBtn.addEventListener("click", () => {
    displayedDate.setMonth(displayedDate.getMonth() + 1);
    renderCalendar();
  });

  // Add Previous Month button
  const prevMonthBtn = document.getElementById("prev-month");
  prevMonthBtn.addEventListener("click", () => {
    displayedDate.setMonth(displayedDate.getMonth() - 1);
    renderCalendar();
  });

  function updateCalendarTitle() {
    const title = document.getElementById("calendar-title");
    const options = { month: "long", year: "numeric" };
    title.textContent = displayedDate.toLocaleDateString("en-US", options);
  }

  function renderCalendar() {
    updateCalendarTitle();
    calendarBody.innerHTML = "";

    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();

    // Check if we are at the real current month
    const todayDate = new Date();
    const isAtCurrentMonth =
      displayedDate.getMonth() === todayDate.getMonth() &&
      displayedDate.getFullYear() === todayDate.getFullYear();

    // Disable prev button if on current month
    prevMonthBtn.disabled = isAtCurrentMonth;

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

      const today = todayDate.getDate();
      const isCurrentMonth =
        todayDate.getMonth() === month && todayDate.getFullYear() === year;
      const dateObject = new Date(year, month, currentDay);
      const isWeekend = dateObject.getDay() === 0 || dateObject.getDay() === 6;

      if (
        (isCurrentMonth && day < today) ||
        isWeekend ||
        (dayStatus &&
          (dayStatus.status === "Confirmed" || dayStatus.status === "Pending"))
      ) {
        btn.classList.add("booked");
        btn.disabled = true;

        if (dayStatus?.status === "Confirmed") {
          btn.textContent = currentDay + " 🔒";
          statusLabel.textContent = `Confirmed by ${
            users.find((u) => u.id === dayStatus.userId)?.username || "Unknown"
          }`;
          statusLabel.classList.add("text-danger");
        } else if (dayStatus?.status === "Pending") {
          btn.textContent = currentDay + " ⏳";
          statusLabel.textContent = `Pending approval for ${
            users.find((u) => u.id === dayStatus.userId)?.username || "Unknown"
          }`;
          statusLabel.classList.add("text-warning");
        } else {
          btn.textContent = currentDay + " 🔒";
          statusLabel.textContent = isWeekend ? "Weekend" : "Unavailable";
          statusLabel.classList.add("text-danger");
        }
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
    // Check if user already has a booking
    // const pendingBooking = statusList.find(
    //   (d) => d.status === "Pending" && d.userId === currentUser.id
    // );
    const existingBooking = statusList.find((d) => d.userId === currentUser.id);
    if (existingBooking) {
      alert("You already have a booking. Cancel it before booking a new date.");
      return;
    }
    const existingIndex = statusList.findIndex(
      (d) => d.day === day && d.month === month && d.year === year
    );
    if (existingIndex > -1) {
      statusList[existingIndex] = {
        day,
        month,
        year,
        userId: currentUser.id,
        status: "Pending",
        timestamp: Date.now(),
      };
    } else {
      statusList.push({
        day,
        month,
        year,
        userId: currentUser.id,
        status: "Pending",
        timestamp: Date.now(),
      });
    }
    localStorage.setItem("status", JSON.stringify(statusList));
    alert(
      `Booking requested for ${day}/${
        month + 1
      }/${year} ⏳ (awaiting admin approval)`
    );
    renderCalendar();
  }

  document.getElementById("logout").addEventListener("click", logout);
  renderCalendar();

  // Listen for changes in localStorage (triggered when admin updates status)
  window.addEventListener("storage", (event) => {
    if (event.key === "status") {
      // Reload statusList and re-render calendar
      statusList = JSON.parse(localStorage.getItem("status")) || [];
      renderCalendar();
    }
  });
}

// === Admin Page Script ===
if (document.getElementById("booking-list")) {
  const bookingList = document.getElementById("booking-list");

  function renderBookings() {
    let statusList = JSON.parse(localStorage.getItem("status")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const now = Date.now();

    // Remove expired pending bookings (older than 5 min)
    statusList = statusList.filter((b) => {
      if (b.status === "Pending" && now - b.timestamp > 5 * 60 * 1000) {
        return false; // expired
      }
      return true;
    });

    bookingList.innerHTML = "";

    statusList.forEach((b, index) => {
      const row = document.createElement("tr");

      const user = users.find((u) => u.id === b.userId)?.username || "Unknown";
      const date = `${b.day}/${b.month + 1}/${b.year}`;
      const status = b.status;

      // Calculate time left if pending
      let timeLeft = "-";
      if (b.status === "Pending") {
        const remaining = 5 * 60 * 1000 - (now - b.timestamp);
        timeLeft =
          remaining > 0 ? Math.floor(remaining / 1000) + "s" : "Expired";
      }

      row.innerHTML = `
          <td>${user}</td>
          <td>${date}</td>
          <td>${status}</td>
          <td>${timeLeft}</td>
          <td>
            ${
              b.status === "Pending"
                ? `
              <button class="btn btn-success btn-sm" onclick="confirmBooking(${index})">Confirm</button>
              <button class="btn btn-danger btn-sm" onclick="rejectBooking(${index})">Reject</button>
            `
                : "Confirmed"
            }
          </td>
        `;
      bookingList.appendChild(row);
    });

    // Save filtered/updated list
    localStorage.setItem("status", JSON.stringify(statusList));
  }

  function confirmBooking(index) {
    let statusList = JSON.parse(localStorage.getItem("status")) || [];
    statusList[index].status = "Confirmed";
    localStorage.setItem("status", JSON.stringify(statusList));
    renderBookings();
  }

  function rejectBooking(index) {
    let statusList = JSON.parse(localStorage.getItem("status")) || [];
    statusList.splice(index, 1);
    localStorage.setItem("status", JSON.stringify(statusList));
    renderBookings();
  }

  setInterval(renderBookings, 1000);
  renderBookings();
  document.getElementById("calendar-btn").addEventListener("click", () => {
    window.location.href = "calendar.html";
  });
}
