// Preloader
window.onload = function() {
    var contenedor = document.getElementById("contenedorPreloader");
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
}

// Navbar
function scrollEffect(pxPantalla) {
    window.addEventListener("scroll", () => {
        var scroll = document.documentElement.scrollTop;
        var bgChange = document.getElementById("navScroll");
        var marcoHamburg = document.getElementById("marcoHamburg");
        var iconoHamburg = document.getElementById("iconoHamburg");

        if (scroll > pxPantalla) {
            bgChange.className = "navbar fixed-top navbar-expand-lg fuentes-personalizadas-scroll";
            marcoHamburg.className = "navbar-toggler text-dark";
            iconoHamburg.className = "fas fa-bars text-dark";
        } else {
            bgChange.className = "navbar fixed-top navbar-expand-lg fuentes-personalizadas";
            marcoHamburg.className = "navbar-toggler text-light";
            iconoHamburg.className = "fas fa-bars text-light";
        }
    })
}

scrollEffect(20);