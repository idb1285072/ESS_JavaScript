// ================== User Setup ==================
const DEFAULT_USERS = [
  { id: 0, username: "admin", password: "@admin123" },
  { id: 1, username: "user1", password: "@user1" },
  { id: 2, username: "user2", password: "@user2" },
  { id: 3, username: "user3", password: "@user3" },
  { id: 4, username: "user4", password: "@user4" },
  { id: 5, username: "user5", password: "@user5" },
];

initLocalStorage("users", DEFAULT_USERS);
initLocalStorage("status", []);

// ================== Local Storage Helpers ==================
function initLocalStorage(key, defaultValue) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }
}
function getLocal(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ================== Cookie Helpers ==================
function generateToken(length = 32) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
function setCookie(name, value, minutes) {
  const expires = new Date(Date.now() + minutes * 60000).toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/`;
}
function getCookie(name) {
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith(name + "="))
      ?.split("=")[1] || ""
  );
}
function eraseCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// ================== Auth ==================
function login(username, password) {
  const user = getLocal("users").find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return alert("Invalid username or password");

  const token = generateToken();
  setCookie("auth_token", token, 30);
  setLocal("currentUser", user);

  window.location.href =
    user.username === "admin" ? "admin.html" : "calendar.html";
}
function logout() {
  eraseCookie("auth_token");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
function isLoggedIn() {
  return getCookie("auth_token") && localStorage.getItem("currentUser");
}

// ================== Login Page ==================
if (document.getElementById("login")) {
  document.getElementById("login").addEventListener("click", () => {
    login(
      document.getElementById("username").value.trim(),
      document.getElementById("password").value.trim()
    );
  });
}

// ================== Calendar Page ==================
if (document.getElementById("calendar-body")) {
  if (!isLoggedIn()) window.location.href = "index.html";

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = getLocal("users");
  const calendarBody = document.getElementById("calendar-body");
  let statusList = getLocal("status");
  let displayedDate = new Date();

  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");

  prevMonthBtn.addEventListener("click", () => changeMonth(-1));
  nextMonthBtn.addEventListener("click", () => changeMonth(1));
  document.getElementById("logout").addEventListener("click", logout);

  function changeMonth(step = 0) {
    displayedDate.setMonth(displayedDate.getMonth() + step);
    renderCalendar();
  }

  function updateCalendarTitle() {
    document.getElementById("calendar-title").textContent =
      displayedDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
  }

  function renderCalendar() {
    updateCalendarTitle();
    calendarBody.innerHTML = "";

    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();
    const todayDate = new Date();

    prevMonthBtn.disabled =
      month === todayDate.getMonth() && year === todayDate.getFullYear();

    const totalDays = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    let row = document.createElement("tr");
    for (let i = 0; i < startDay; i++) row.appendChild(emptyCell());

    for (let day = 1; day <= totalDays; day++) {
      if (row.children.length === 7) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }
      row.appendChild(renderDayCell(day, month, year, todayDate));
    }

    while (row.children.length < 7) row.appendChild(emptyCell());
    calendarBody.appendChild(row);
  }

  function renderDayCell(day, month, year, todayDate) {
    const td = document.createElement("td");
    const wrapper = document.createElement("div");
    wrapper.className = "d-flex flex-column align-items-center";

    const btn = document.createElement("button");
    btn.textContent = day;
    btn.style.width = "100%";
    btn.style.borderRadius = ".75rem";

    const label = document.createElement("small");
    label.className = "fw-bold mt-1";

    const dayStatus = statusList.find(
      (d) => d.day === day && d.month === month && d.year === year
    );
    const isWeekend = [0, 6].includes(new Date(year, month, day).getDay());
    const isPastDay =
      todayDate.getMonth() === month &&
      todayDate.getFullYear() === year &&
      day < todayDate.getDate();

    if (
      isPastDay ||
      isWeekend ||
      ["Confirmed", "Pending"].includes(dayStatus?.status)
    ) {
      btn.disabled = true;
      btn.className = "booked";

      if (dayStatus?.status === "Confirmed") {
        btn.textContent = `${day} 🔒`;
        label.textContent = `Confirmed by ${
          users.find((u) => u.id === dayStatus.userId)?.username || "Unknown"
        }`;
        label.classList.add("text-danger");
      } else if (dayStatus?.status === "Pending") {
        btn.textContent = `${day} ⏳`;
        label.textContent = `Pending approval for ${
          users.find((u) => u.id === dayStatus.userId)?.username || "Unknown"
        }`;
        label.classList.add("text-warning");
      } else {
        btn.textContent = `${day} 🔒`;
        label.textContent = isWeekend ? "Weekend" : "Unavailable";
        label.classList.add("text-danger");
      }
    } else {
      btn.className = "available";
      btn.addEventListener("click", () => bookDate(day, month, year));
      label.textContent = "Available";
      label.classList.add("text-success");
    }

    wrapper.append(btn, label);
    td.appendChild(wrapper);
    return td;
  }

  function emptyCell() {
    const td = document.createElement("td");
    td.className = "empty";
    return td;
  }

  function bookDate(day, month, year) {
    if (statusList.some((d) => d.userId === currentUser.id)) {
      return alert(
        "You already have a booking. Cancel it before booking a new date."
      );
    }

    const newBooking = {
      day,
      month,
      year,
      userId: currentUser.id,
      status: "Pending",
      timestamp: Date.now(),
    };

    const existingIndex = statusList.findIndex(
      (d) => d.day === day && d.month === month && d.year === year
    );
    if (existingIndex > -1) {
      statusList[existingIndex] = newBooking;
    } else {
      statusList.push(newBooking);
    }

    setLocal("status", statusList);
    alert(
      `Booking requested for ${day}/${
        month + 1
      }/${year} ⏳ (awaiting admin approval)`
    );
    renderCalendar();
  }

  // Auto-update calendar when admin updates bookings
  window.addEventListener("storage", (e) => {
    if (e.key === "status") {
      statusList = getLocal("status");
      renderCalendar();
    }
  });

  renderCalendar();
}

// ================== Admin Page ==================
if (document.getElementById("booking-list")) {
  const bookingList = document.getElementById("booking-list");

  function renderBookings() {
    let statusList = getLocal("status");
    const users = getLocal("users");
    const now = Date.now();

    // Expire pending bookings older than 5 min
    statusList = statusList.filter(
      (b) => !(b.status === "Pending" && now - b.timestamp > 5 * 60000)
    );

    bookingList.innerHTML = "";

    statusList.forEach((b, index) => {
      const user = users.find((u) => u.id === b.userId)?.username || "Unknown";
      const date = `${b.day}/${b.month + 1}/${b.year}`;
      let timeLeft = "-";

      if (b.status === "Pending") {
        const remaining = 5 * 60000 - (now - b.timestamp);
        timeLeft =
          remaining > 0 ? Math.floor(remaining / 1000) + "s" : "Expired";
      }

      bookingList.innerHTML += `
        <tr>
          <td>${user}</td>
          <td>${date}</td>
          <td>${b.status}</td>
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
        </tr>`;
    });
    setLocal("status", statusList);
  }

  function confirmBooking(index) {
    const statusList = getLocal("status");
    statusList[index].status = "Confirmed";
    setLocal("status", statusList);
    renderBookings();
  }

  function rejectBooking(index) {
    const statusList = getLocal("status");
    statusList.splice(index, 1);
    setLocal("status", statusList);
    renderBookings();
  }

  setInterval(renderBookings, 1000);
  renderBookings();

  document.getElementById("calendar-btn").addEventListener("click", () => {
    window.location.href = "calendar.html";
  });
}
