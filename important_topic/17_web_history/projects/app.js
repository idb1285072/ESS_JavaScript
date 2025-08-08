const content = document.getElementById("content");
const historyCount = document.getElementById("history-count");

function renderView(view, state = {}) {
  let html = "";
  if (view === "dashboard") {
    html = `
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 class="card-title">Dashboard</h1>
          <p class="card-text">Welcome to your single-page app powered by the History API.</p>
          <p class="text-muted">Scroll position and other UI state will be preserved as you navigate.</p>
        </div>
      </div>`;
  }
  if (view === "notes") {
    html = `
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 class="card-title">Notes</h1>
          <textarea class="form-control" rows="6" placeholder="Type your notes here...">${
            state.formData || ""
          }</textarea>
        </div>
      </div>`;
  }
  if (view === "weather") {
    html = `
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 class="card-title">Weather</h1>
          <div class="mb-3">
            <label class="form-label">City</label>
            <input type="text" class="form-control" value="${
              state.city || ""
            }" placeholder="Enter city...">
          </div>
          <p class="text-muted">Weather data is simulated in this demo.</p>
        </div>
      </div>`;
  }

  content.innerHTML = html;

  // Restore scroll
  requestAnimationFrame(() => {
    if (state.scrollY) window.scrollTo(0, state.scrollY);
  });
}

function saveCurrentState() {
  const currentView = history.state?.view || "dashboard";
  const scrollY = window.scrollY;
  let formData = "";
  let city = "";
  if (currentView === "notes") {
    formData = document.querySelector("textarea")?.value || "";
  }
  if (currentView === "weather") {
    city = document.querySelector('input[type="text"]')?.value || "";
  }
  history.replaceState(
    { view: currentView, scrollY, formData, city },
    "",
    location.pathname
  );
}

// Handle nav clicks
document.querySelectorAll("[data-view]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    saveCurrentState();
    const view = link.dataset.view;
    history.pushState({ view, scrollY: 0 }, "", "/" + view);
    renderView(view);
    updateHistoryCount();
  });
});

// Handle back/forward
window.addEventListener("popstate", (e) => {
  if (e.state) renderView(e.state.view, e.state);
  updateHistoryCount();
});

// Custom navigation
document.getElementById("custom-back").onclick = () => history.back();
document.getElementById("custom-forward").onclick = () => history.forward();
document.getElementById("jump-btn").onclick = () => {
  const steps = parseInt(document.getElementById("jump-steps").value, 10);
  if (!isNaN(steps)) history.go(steps);
};

function updateHistoryCount() {
  historyCount.textContent = history.length;
}

// Initial load
if (!history.state) {
  history.replaceState({ view: "dashboard", scrollY: 0 }, "", "/dashboard");
}
renderView(history.state.view || "dashboard");
updateHistoryCount();
