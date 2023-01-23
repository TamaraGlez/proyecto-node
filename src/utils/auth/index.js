const passport = require('passport');
const registerStrategy = require('./registerStrategy');


const activateAutentication = () => {
    passport.use('registrito', registerStrategy);
    
};

module.exports = {
    activateAutentication,
};