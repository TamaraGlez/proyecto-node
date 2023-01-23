const passport = require("passport");

const registerPost = (req, res, next) => {
  try {
    const done = (error, user) => {
      console.log("done OK ejecutándose");
      if (error) return next(error);
      return res.status(200).json(user);
    };
    //registrito viene de auth>index.js 
    passport.authenticate("registrito", done)(req);

  } catch (error) {
    return next(error);
  }
};

const loginPost = (req, res, next) => {
  try {
    return res.status(200).json("Login funcionando de nuevo");
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registerPost,
  loginPost,
};
