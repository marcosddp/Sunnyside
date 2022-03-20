const menuIcon = document.getElementById("menu-icon");
const navDropdown = document.getElementById("navbar-mobile");



menuIcon.addEventListener("click", (event) => {
    navDropdown.classList.toggle("hidden");
});
