export default {
  header: "My Create Page",
  view: "Create"
};
/*create.js
document.getElementById("createPostForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form inputs
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;

  // Validate the form inputs
  if(title.trim() === "" || content.trim() === "") {
      alert("Please fill in all fields");
      return;
  }

  // Create a new post object
  var post = {
      title: title,
      content: content
  };

  // Send the post object to the MockAPI server using fetch API
  fetch("https://mockapi.io/api/{your-api-id}/posts", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "app-id": "{your-app-id}" // replace with your MockAPI app ID
      },
      body: JSON.stringify(post)
  })
  .then(function(response) {
      if(response.ok) {
          alert("Post created successfully");
          // Reset the form inputs
          document.getElementById("title").value = "";
          document.getElementById("content").value = "";
      } else {
          throw new Error("Error creating post");
      }
  })
  .catch(function(error) {
      alert(error.message);
  });
});*/
