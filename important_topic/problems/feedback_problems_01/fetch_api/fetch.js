// 1.
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};
// getUsers();

// 2.
const getByQueryString = async () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts/";
  const queryParams = {
    // _embed: "comments", // retrieve child resource
    _page: 1,
    _limit: 5,
    _sort: "title",
    // _expand: "user", // retrive parent resource
    // _order: "asc",
    userId: 1
  };
  try{
    const queryStrings = new URLSearchParams(queryParams).toString();
    const response = await fetch(`${API_URL}?${queryStrings}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const ol = document.createElement("ol");
    data.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      ol.appendChild(li);
    });
    document.getElementById("title-container").appendChild(ol);
  }catch (error) {
    console.error(error.message); 
  }
}
getByQueryString();

// 3.
const postPost = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  }catch (error) {
    console.error(error.message);
  }
}
// postPost();