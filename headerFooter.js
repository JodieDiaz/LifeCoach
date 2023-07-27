// headerFooter.js

// Función para cargar el contenido del header.html
function loadHeaderContent() {
  const headerContainer = document.getElementById("header-content");

  // Realizar la solicitud HTTP
  const request = new XMLHttpRequest();
  request.open("GET", "header.html", true);

  // Manejar la respuesta de la solicitud
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Insertar el contenido en el div
      headerContainer.innerHTML = request.responseText;
    } else {
      // Mostrar un mensaje de error si la solicitud falla
      headerContainer.innerHTML = "Error al cargar el contenido del header.";
    }
  };

  // Manejar errores de conexión
  request.onerror = function () {
    headerContainer.innerHTML =
      "Error de conexión al cargar el contenido del header.";
  };

  // Enviar la solicitud
  request.send();
}

// Llamar a la función para cargar el contenido del header cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", loadHeaderContent);

// document.addEventListener("DOMContentLoaded", function () {
//   // Obtenemos el header y footer desde sus archivos externos
//   fetch("header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header-placeholder").innerHTML = data;
//     });

//   fetch("footer.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("footer-placeholder").innerHTML = data;
//     });
// });

// Otros códigos relacionados con el header y footer, si los hay
