const God = require("./god.model");

const indexGet = async (req, res, next) => {
  try {
    const gods = await God.find();
    return res.status(200).json(gods);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
      const { id } = req.params;
      const found = await God.findById(id);
      return res.status(200).json(found);
  } catch (error) {
      return next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
      const { name } = req.params;
      const found = await God.find({name: name});
      return res.status(200).json(found);
  } catch (error) {
      return next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    console.log(req.body);

    const godCreated = new God(req.body);

    const created = await godCreated.save();

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
    const edited = await God.findByIdAndUpdate(id, fields, options);
    return res.status(200).json(edited);
  }
  catch(error){
    return next(error);
  }
};

const deleteGod = async (req, res, next) => {
  try {
      const { id } = req.params;
      const deleted = await God.deleteOne({ _id: id });
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
  deleteGod
};
