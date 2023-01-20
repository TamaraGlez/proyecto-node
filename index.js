const express = require("express");
// importamos la base de datos
const db = require('./src/utils/db')
console.log('DB dentro de index', db)
db.connectDB();

const PORT = 8080;

const server = express();
const router = express.Router();
// me transforma lo que envio a un lenguaje que entienda postman
server.use(express.json())

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

server.listen(PORT, () => {
    console.log(`[Server] echando chispas en http://localhost:${PORT}`);
});