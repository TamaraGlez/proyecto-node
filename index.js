const express = require("express");
// importamos la base de datos y la ruta del archivo
const db = require("./src/utils/db");
// importamos la función de db.js del módulo de exportación
db.connectDB();

//camino que sigue index para encontrar los archivos que necesita para ejecutar
const godsRoutes = require("./src/api/gods/god.routes");
const generationsRoutes = require("./src/api/generations/generation.routes");
const indexRoutes = require("./src/api/index/index.routes"); //importo index.routes


const PORT = 8080;

const server = express();
const router = express.Router();
// me transforma lo que envio a un lenguaje que entienda postman
server.use(express.json());
// server.use(express.urlencoded({ extended: true }));//para peticiones de un formulario x-www-form en post

//configuración de todas las rutas de nuestro servidor
server.use("/gods", godsRoutes);
server.use("/generations", generationsRoutes);
server.use("/", indexRoutes);


// Control de errores.
server.use("*", (req, res, next) => {
  return res.status(404).json("No se encuentra la URL. Prueba con otra URL");
});


server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Unexpected Error!";
  return res.status(status).json(message);
});



// hacemos que el server comience a echar chispitas
server.listen(PORT, () => {
  console.log(`[Server] echando chispas en http://localhost:${PORT}`);
});

