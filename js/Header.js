window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 90)
})

// Mobile Responsive
const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show')
})

//Página 404
if (document.title === "Página 404") {
    window.location.replace("../pages/pagina_404.html");
}