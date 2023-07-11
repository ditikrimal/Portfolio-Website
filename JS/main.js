const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const contactBtn = document.querySelector(".contactBtn");
const mblContactBtn = document.getElementById("mblContactBtn");
const navBtns = document.querySelector(".navbar-link");
const mainContent = document.querySelector(".mainContent");
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
const scrollHeader = () => {};
// window.addEventListener("scroll", function () {
//   nav_header.classList.add("scroll", window.scrollY > 100);
//   mainContent.classList.add("scroll", window.scrollY > 100);
// });

mobile_nav.addEventListener("click", () => toggleNavbar());
mblContactBtn.addEventListener("click", () => {
  contactBox.classList.toggle("active");
});
