const User = require("../../api/users/User.model");
const bcrypt = require("bcrypt");
const { isValidEmail, isValidPassword } = require("../validations");

const LocalStrategy = require("passport-local").Strategy;

const registerStrategy = new LocalStrategy(
  {
    usernameField: "email", // el nombre del modelo de nuestro campo para identificar usuarios
    passwordField: "password",
    passReqToCallback: true, // en el controlador, passport.use
  },
  async (req, email, password, done) => {
    try {
      const userDB = await User.findOne({ email: email.toLowerCase() });

      if (userDB) {
        const error = new Error("El usuario ya existe");
        return done(error, null);
      }

      if (!isValidEmail(email)) {
        const error = new Error("El email no es válido");
        return done(error, null);
      }

      if (!isValidPassword(password)) {
        const error = new Error(
          "La contraseña no cumple las reglas. 8 carácteres, 1 mayúscula y 1 número"
        );
        return done(error, null);
      }

      const saltRounds = 8;
      const encryptedPassword = await bcrypt.hash(password, saltRounds);

      const userToBeCreated = new User({
        ...req.body,
        email,
        password: encryptedPassword,
      });

      const created = await userToBeCreated.save();

      return done(null, created);
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = registerStrategy;
