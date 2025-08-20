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
      timeLeft = remaining > 0 ? Math.floor(remaining / 1000) + "s" : "Expired";
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
