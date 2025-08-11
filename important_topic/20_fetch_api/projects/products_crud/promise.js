// const div = document.getElementById("product-display");

fetch("https://fakestoreapi.com/products", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

const getProducts = async (url = "") => {
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
  }
};
// getProducts("https://fakestoreapi.com/products");

const product = {
  title: "Test Title",
  price: 100.99,
  description: "Test description",
  category: "Test category",
  image: "test/img.png",
  rating: {
    rate: 5.0,
    count: 100,
  },
};
const postProduct = async (url = "", product) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// postProduct("https://fakestoreapi.com/products", product);

const putProduct = async (url = "", product) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// putProduct("https://fakestoreapi.com/products/1", product);

const getByProductId = async (url = "") => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// getByProductId("https://fakestoreapi.com/products/1");

const deleteProduct = async (url = "") => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
deleteProduct("https://fakestoreapi.com/products/1");
