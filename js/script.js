// profile
const profile = document.querySelector(".profile");
const userProfileBtn = document.getElementById("user-btn");

userProfileBtn.addEventListener("click", () => {
  searchForm.classList.remove("active");
  sidebar.classList.remove("active");
  profile.classList.toggle("active");
});

//mobile search
const searchForm = document.querySelector(".header__form");
const mobileSearchBtn = document.getElementById("search-btn");

mobileSearchBtn.addEventListener("click", () => {
  profile.classList.remove("active");
  sidebar.classList.remove("active");
  searchForm.classList.toggle("active");
});

// sidebar menu
const sidebar = document.querySelector(".sidebar");
const sidebarMenuBtn = document.getElementById("menu-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close");

sidebarMenuBtn.addEventListener("click", () => {
  profile.classList.remove("active");
  searchForm.classList.remove("active");
  sidebar.classList.toggle("active");
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// scroll event
window.addEventListener("scroll", () => {
  profile.classList.remove("active");
  searchForm.classList.remove("active");
});
