const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const contactBtn = document.querySelector(".contactBtn");
const contactBox = document.querySelector(".contactBox");
const closeBtn = document.querySelector(".closeBtnDiv");
contactBtn.addEventListener("click", () => {
  contactBox.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  contactBox.classList.toggle("active");
});
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
