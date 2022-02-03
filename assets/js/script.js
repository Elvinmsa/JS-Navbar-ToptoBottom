let closeNav = document.getElementById("close-btn");
let openNav = document.getElementById("open-btn");
let navbar = document.querySelector(".navbar");

closeNav.addEventListener("click", function () {
    navbar.classList.add("close");
    openNav.style.display = "block"
})

openNav.addEventListener("click", function () {
    navbar.classList.remove("close");
    this.style.display = "none";
})