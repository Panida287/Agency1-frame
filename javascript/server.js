// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Define an array of posts containing objects with post details
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "Content of Post 1",
      category: "wedding",
      image_path: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Post 2",
      content: "Content of Post 2",
      category: "tinder",
      image_path: "https://via.placeholder.com/150",
    },
    // Add more posts as needed
  ];

  // Get the container element where posts will be displayed
  const postsContainer = document.getElementById("postsContainer");

  // Loop through each post object in the array
  posts.forEach((post) => {
    // Create a div element for each post
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Create an h2 element for the post title
    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    // Create a paragraph element for the post content
    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    // Create a paragraph element for the post category
    const categoryElement = document.createElement("p");
    categoryElement.textContent = "Category: " + post.category;

    // Create an img element for the post image
    const imageElement = document.createElement("img");
    imageElement.src = post.image_path;
    imageElement.alt = post.title;

    // Append title, content, category, and image elements to the post div
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(categoryElement);
    postElement.appendChild(imageElement);

    // Append the post div to the posts container
    postsContainer.appendChild(postElement);
  });
});
