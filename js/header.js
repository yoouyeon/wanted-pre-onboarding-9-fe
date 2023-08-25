const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navigation-menu");

menuBtn.addEventListener("click", () => {
  console.log("clicked");
  menu.classList.toggle("open");
});
