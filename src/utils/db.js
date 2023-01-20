const mongoose = require ('mongoose');

const DB_URL = 'mongodb+srv://nanoide:nanoide@cluster0.piy5qmp.mongodb.net/Dioses_mitologia_griega?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
       const db = await mongoose.connect(DB_URL);
       console.log('[server OK] conectado base de datos')
       console.log(db);
    }
    catch(error) {
        console.log('[server ERROR] Error conectando base de datos')
    }


};

module.exports = {
    connectDB
}