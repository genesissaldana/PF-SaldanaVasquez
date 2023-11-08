window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 90)
})