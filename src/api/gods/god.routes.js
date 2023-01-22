const express = require ('express');
const controller = require('./god.controller');

const router = express.Router();

router.get('/', controller.indexGet);

router.get("/getbyname/:name", controller.getByName);

router.get("/:id", controller.getById);

router.post('/create', controller.createPost);

router.put("/edit/:id", controller.editPut);

router.delete("/delete/:id", controller.deleteGod)




module.exports = router;