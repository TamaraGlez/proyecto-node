const Generation = require("./generation.model");

const indexGet = async (req, res, next) => {
  try {
    const generations = await Generation.find();
    return res.status(200).json(generations);
  } catch (error) {
    return next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    console.log(req.body);

    const generationCreated = new Generation(req.body);

    const created = await generationCreated.save();

    return res.status(201).json(created);
    
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  indexGet,
  createPost,
};
