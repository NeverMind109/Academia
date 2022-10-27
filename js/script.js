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

// toggle
const themeToggleBtn = document.getElementById("theme-btn");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  themeToggleBtn.classList.replace("fa-sun", "fa-moon");
  document.body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};
const disableDarkMode = () => {
  themeToggleBtn.classList.replace("fa-moon", "fa-sun");
  document.body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}
themeToggleBtn.addEventListener("click", (e) => {
  let darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// scroll event
window.addEventListener("scroll", () => {
  profile.classList.remove("active");
  searchForm.classList.remove("active");
});
