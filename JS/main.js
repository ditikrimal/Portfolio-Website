const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const contactBtn = document.querySelector(".contactBtn");
const mblContactBtn = document.getElementById("mblContactBtn");
const navBtns = document.querySelector(".navbar-link");
const mainContent = document.querySelector(".mainContent");
const contactBox = document.querySelector(".contactBox");
const closeBtn = document.querySelector(".closeBtnDiv");
const dropDown = document.querySelector(".dropDown");
const skillsTab = document.querySelector(".skillsTab");
const skillsArrow = document.getElementById("icon");

contactBtn.addEventListener("click", () => {
  contactBox.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  contactBox.classList.toggle("active");
});

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

skillsTab.addEventListener("click", () => {
  skillsArrow.classList.toggle("active");
  dropDown.classList.toggle("active");
});

mobile_nav.addEventListener("click", () => toggleNavbar());
mblContactBtn.addEventListener("click", () => {
  contactBox.classList.toggle("active");
  nav_header.classList.toggle("active");
});
