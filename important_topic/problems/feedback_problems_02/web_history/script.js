const updateHistoryLength = () => { 
document.getElementById("history-length").textContent = history.length;
}

document.getElementById("page1").addEventListener("click", () => {
  history.pushState({ page: 1 }, "Page 1", "?page=1");
  document.getElementById("title").textContent = "Page 1";
  updateHistoryLength();
});
document.getElementById("page2").addEventListener("click", () => {
  history.pushState({ page: 2 }, "Page 2", "?page=2");
  document.getElementById("title").textContent = "Page 2";
  updateHistoryLength();
});
document.getElementById("page3").addEventListener("click", () => {
  history.pushState({ page: 3 }, "Page 3", "?page=3");
  document.getElementById("title").textContent = "Page 3";
  updateHistoryLength();
});

document.getElementById("back").addEventListener("click", () => {
  history.back();
});
document.getElementById("forward").addEventListener("click", () => {
  history.forward();
});
document.getElementById("go").addEventListener("click", () => {
  const step = parseInt(document.getElementById("step").value, 10);
  if (!isNaN(step)) {
    history.go(step);
  } else {
    console.error("Invalid page number");
  }
});

window.addEventListener("popstate", (event) => {
  console.log(event);
  if (event.state) {
    document.getElementById("title").textContent = `Page ${event.state.page}`;
  } else {
    document.getElementById("title").textContent = "Home Page";
  }
  updateHistoryLength();
});
