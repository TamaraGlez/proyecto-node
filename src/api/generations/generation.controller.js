const Generation = require("./generation.model");

const indexGet = async (req, res, next) => {
  try {
    const generations = await Generation.find();
    return res.status(200).json(generations);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
      const { id } = req.params;
      const found = await Generation.findById(id);
      return res.status(200).json(found);
  } catch (error) {
      return next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
      const { name } = req.params;
      const found = await Generation.find({name: name});
      return res.status(200).json(found);
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

const editPut = async(req, res, next)=>{
  try {
    const { id } = req.params;
    const fields = {...req.body};
    const options = { new: true };
    const edited = await Generation.findByIdAndUpdate(id, fields, options);
    return res.status(200).json(edited);
  }
  catch(error){
    return next(error);
  }
};

const deleteGeneration = async (req, res, next) => {
  try {
      const { id } = req.params;
      const deleted = await Generation.deleteOne({ _id: id });
      if (deleted.deletedCount) {
          return res.status(200).json("Elemento eliminado con éxito");
      } else {
          return res.status(200).json("No se encuentra el elemento para eliminar");
      }
  } catch (error) {
      return next(error);
  }
};





module.exports = {
  indexGet,
  getById,
  getByName,
  createPost,
  editPut,
  deleteGeneration
};
