const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
const contactBox = document.querySelector(".contactBox");
const closeBtnDiv = document.querySelector(".closeBtnDiv");
const mainContent = document.getElementById("mainContent");
const contactBtn = document.getElementById("contactBtn");
const mblContactBtn = document.getElementById("mblContactBtn");
const navBtns = document.querySelectorAll(".navbar-link");

const toggleNavbar = () => {
  navHeader.classList.toggle("active");
};

mobileNav.addEventListener("click", toggleNavbar);

// Function to handle the contact box and navbar toggling
const handleContactToggle = () => {
  contactBox.classList.toggle("active");
  navHeader.classList.toggle("active");
};

contactBtn.addEventListener("click", handleContactToggle);
closeBtnDiv.addEventListener("click", handleContactToggle);
mblContactBtn.addEventListener("click", handleContactToggle);

// Event delegation for navigation buttons
mainContent.addEventListener("click", (event) => {
  if (event.target.classList.contains("navbar-link")) {
    toggleNavbar();
  }
});
