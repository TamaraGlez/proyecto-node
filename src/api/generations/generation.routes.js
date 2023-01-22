const express = require ('express');
const controller = require('./generation.controller');

const router = express.Router();

router.get('/', controller.indexGet);

router.get("/getbyname/:name", controller.getByName);

router.get("/:id", controller.getById);

router.post('/create', controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteGeneration)




module.exports = router;