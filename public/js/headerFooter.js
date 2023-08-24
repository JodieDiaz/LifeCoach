
// Obtener el elemento del <header>
const header = document.querySelector("header");

// Obtener el elemento del <div id="ribbon">
const ribbon = document.getElementById("ribbon");

// Agregar un event listener al evento de scroll en la ventana
window.addEventListener("scroll", function () {
  // Obtener la posición vertical del scroll
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Cambiar el fondo del header según el scroll
  if (scrollTop > 0) {
    header.classList.add("scrolled");
    ribbon.style.opacity = "1"; // Mostrar el ribbon
  } else {
    header.classList.remove("scrolled");
    ribbon.style.opacity = "0"; // Ocultar el ribbon
  }
});

// JS para el menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav").classList.toggle("active");
});
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Carga el contenido del archivo footer.htm y lo inserta en el contenedor del footer
function loadFooter() {
  var footerContainer = document.getElementById("footer-container");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "footer.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      footerContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Llama a la función para cargar el footer cuando se carga la página
document.addEventListener("DOMContentLoaded", loadFooter);

