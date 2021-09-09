const toggleButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("links")[0];
const links = document.getElementsByClassName("links");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });
}
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
