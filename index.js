const express = require("express");
// importamos la base de datos y la ruta del archivo
const db = require('./src/utils/db')
console.log('DB dentro de index', db)
// importamos la función de db.js del módulo de exportación
db.connectDB();

const indexRoutes = require('./src/api/index/index.routes'); //importo index.routes

const PORT = 8080;

const server = express();
const router = express.Router();
// me transforma lo que envio a un lenguaje que entienda postman
server.use(express.json())

//configuración de todas las rutas de nuestro servidor
server.use("/", indexRoutes);

// creamos direcciones al router
router.get("/", (req, res, next) => {
    result.status(200).json("SERVER WORKING UP");
})


router.get("/generations", (req, res) => {
    // const generations = ["GenerationCaos", "GenerationFirst", "GenerationSecond"];
    return res.status(200).json(generations);
});

router.get("/gods", (req, res) => {
    // const gods = ["Hestia", "Demeter", "Hera", "Zeus", "Poseidón", "Hades", "Hefesto", "Ares", "Dioniso", "Hermes", "Atenea", "Artemisa", "Apolo", "Afrodita"];
    return res.status(200).json(gods);
});

router.post("/")

// usamos el router
server.use('/', router)
// hacemos que el server comience a echar chispitas
server.listen(PORT, () => {
    console.log(`[Server] echando chispas en http://localhost:${PORT}`);
});