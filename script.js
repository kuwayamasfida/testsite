document.getElementById("heroBtn").addEventListener("click", () => {
  document.getElementById("cars").scrollIntoView({
    behavior: "smooth"
  });
});

const carList = document.getElementById("carList");
const posts = JSON.parse(localStorage.getItem("posts")) || [];

posts.forEach(post => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="image-box">
      ${post.img ? `<img src="${post.img}">` : "NO IMAGE"}
    </div>
    <h3>${post.name}</h3>
    <p>${post.desc}</p>
  `;

  carList.appendChild(card);
});
