// XMLHttpRequest is a built-in JavaScript object that allows you to make HTTP requests to load data from a web server without refreshing the page
// It is the foundation of AJAX
// replace by fetch()

const container = document.getElementById("container");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const users = JSON.parse(xhr.responseText);
    let userCards = "";

    users.forEach(function (user) {
      userCards += createUserCard(user);
    });

    container.innerHTML = userCards;
  } else {
    container.innerHTML = `<div class="alert alert-danger">Failed to load user data (status ${xhr.status})</div>`;
  }
};

xhr.onerror = function () {
  container.innerHTML = `<div class="alert alert-danger">An error occurred while fetching user data.</div>`;
};

xhr.send();

function createUserCard(user) {
  return `
    <div class="card shadow-lg rounded-4 border-0 my-3">
        <div class="card-body">
          <h3 class="card-title mb-3 text-primary">${user.name}</h3>
          <h6 class="card-subtitle text-muted mb-2">${user.username}</h6>
          <p class="mb-1">
            <strong>Email:</strong>
            <a href="mailto:${user.email}">${user.email}</a>
          </p>
          <p class="mb-1">
            <strong>Phone:</strong>
            <a href="tel:${user.phone}">${user.phone}</a>
          </p>
          <p class="mb-3">
            <strong>Website:</strong>
            <a href="http://${user.website}" target="_blank">${user.website}</a>
          </p>
          <hr />
          <h5 class="mt-4 text-secondary">Address</h5>
          <p class="mb-0">
            ${user.address.suite}, ${user.address.street}<br />
            ${user.address.city}, ${user.address.zipcode}<br />
            <small class="text-muted">Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</small>
          </p>
          <hr />
          <h5 class="mt-4 text-secondary"> Company</h5>
          <p class="mb-1"><strong>Name:</strong> ${user.company.name}</p>
          <p class="mb-1">
            <strong>Tagline:</strong>
            <em>${user.company.catchPhrase}</em>
          </p>
          <p><strong>Business:</strong> ${user.company.bs}</p>
        </div>
      </div>
  `;
}
