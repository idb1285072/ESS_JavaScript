// API Call with promise
const getUser = (id) =>
  new Promise((resolve, reject) => {
    console.log(`Fetching user ${id}...`);
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Murad Hossen" });
      } else {
        reject("Invalid user Id");
      }
    }, 2000);
  });

getUser(1)
  .then((user) => console.log(`User: ${user.name}`))
  .catch((error) => console.log(`Error: ${error}`));

// Chaining Promiss
function fetchPrice(productId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ productId, price: 100 }), 1000);
  });
}

function applyDiscount(product) {
  return new Promise((resolve) => {
    const discounted = { ...product, price: product.price * 0.9 };
    resolve(discounted);
  });
}

function checkout(product) {
  return new Promise((resolve) => {
    resolve(
      `Checked out ${product.productId} for $${product.price.toFixed(2)}`
    );
  });
}

fetchPrice("ABC123")
  .then(applyDiscount)
  .then(checkout)
  .then((result) => console.log(result));

// AJAX
const BASE_URL = "https://jsonplaceholder.typicode.com";
fetch(`${BASE_URL}/users/1`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return Promise.resolve("Something");
  })
  .then((something) => {
    console.log(something);
    return Promise.resolve("Another Promise");
  })
  .then((another) => console.log(another))
  .catch((error) => console.log(error))
  .finally("End the promise");
