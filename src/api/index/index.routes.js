const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.status(200).json('API ROOT');
});

router.get('/status', (req, res,next) => {
    return res.status(200).json('STATUS OK - server working')
});

module.exports = router;