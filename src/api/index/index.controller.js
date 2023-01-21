const indexGet = (req, res, next) => {
    return res.status(200).json('API ROOT');
};

const statusGet =  (req, res,next) => {
    return res.status(200).json('STATUS OK - server working')
};

module.exports = {
    indexGet,
    statusGet
};