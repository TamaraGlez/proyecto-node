const express = require ('express');
const controller = require('./generation.controller');

const router = express.Router();

router.get('/', controller.indexGet);

router.post('/create', controller.createPost);




module.exports = router;