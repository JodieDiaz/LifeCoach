const express = require("express");
const app = express();
const path = require("path");

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta para la página de inicio (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para la página "Conóceme" (conoceme.html)
app.get("/conoceme", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "conoceme.html"));
});

// Ruta para la página "Servicio" (servicio.html)
app.get("/servicio", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "servicio.html"));
});

// Ruta para la página "Contacto" (contacto.html)
app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contacto.html"));
});

// Resto de las rutas y configuraciones del servidor...

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
