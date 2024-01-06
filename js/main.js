
var hamburger = document.querySelector(".hamburger");
var nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  // Toggle the "active" class on hamburger and nav_menu
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  // Remove the "active" class when a nav-link is clicked
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}));

//ABOUT