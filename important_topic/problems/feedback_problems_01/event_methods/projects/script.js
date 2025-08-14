const openModalBtn = document.getElementById("openModalBtn");
const modalElement = document.getElementById("myModal");

const bsModal = new bootstrap.Modal(modalElement);

openModalBtn.addEventListener("click", () => {
  bsModal.show();
});

const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalFooterClose = document.getElementById("modalFooterClose");

function confirmClose() {
  if (confirm("Are you sure you want to close the modal?")) {
    bsModal.hide();
  }
}

modalCloseBtn.addEventListener("click", confirmClose);
modalFooterClose.addEventListener("click", confirmClose);

modalElement.addEventListener("click", (e) => {
  if (e.target === modalElement) {
    confirmClose();
  }
});
