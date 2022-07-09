const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
console.log("🚀 ~ file: index.js ~ line 3 ~ menu", menu);
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
