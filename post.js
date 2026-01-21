document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("carName").value;
  const desc = document.getElementById("carDesc").value;
  const img = document.getElementById("carImg").value;

  const post = { name, desc, img };

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);

  localStorage.setItem("posts", JSON.stringify(posts));

  alert("投稿しました");
  this.reset();
});
