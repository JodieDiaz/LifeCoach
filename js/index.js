document.addEventListener("DOMContentLoaded", () => {
  // Obtener el elemento del <header>
  const header = document.querySelector("header")
  // Obtener el elemento del <footer>
  const footer = document.querySelector("footer")

  // After document is loaded, add header and footer to the page
  fetch("header.html")
    .then(response => response.text())
    .then(data => header.innerHTML = data)

  fetch("footer.html")
    .then(response => response.text())
    .then(data => footer.innerHTML = data)

  const parallaxBg = document.querySelector(".parallax-bg")

  // Agregar un event listener al evento de scroll en la ventana
  window.addEventListener("scroll", function () {
    // Obtener la posición vertical del scroll
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    // Cambiar el fondo del header según el scroll
    if (scrollTop > 0) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollTop * 0.3}px)` // Ajusta la velocidad del efecto
    }
  })

  // JS para el menú hamburguesa
  header.addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("active")
  })
})
