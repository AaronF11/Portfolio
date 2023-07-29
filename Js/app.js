// Obtener el elemento de navegación
const navbar = document.querySelector(".navbar");

// Obtener la posición vertical inicial de la barra de navegación
const navbarOffsetTop = navbar.offsetTop;

// Función para verificar y aplicar la clase CSS para hacer la navegación estática
function checkStickyNav() {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
}

// Evento que se dispara cuando se hace scroll en la página
window.addEventListener("scroll", checkStickyNav);
