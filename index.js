const express = require("express");
// importamos la base de datos y la ruta del archivo
const db = require("./src/utils/db");
// importamos la función de db.js del módulo de exportación
db.connectDB();

const indexRoutes = require("./src/api/index/index.routes"); //importo index.routes
const generationsRoutes = require("./src/api/generations/generation.routes");

const PORT = 8080;

const server = express();
const router = express.Router();
// me transforma lo que envio a un lenguaje que entienda postman
server.use(express.json());

//configuración de todas las rutas de nuestro servidor
server.use("/", indexRoutes);
server.use("/generations", generationsRoutes);

// hacemos que el server comience a echar chispitas
server.listen(PORT, () => {
  console.log(`[Server] echando chispas en http://localhost:${PORT}`);
});
