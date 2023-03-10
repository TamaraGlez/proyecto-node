const mongoose = require('mongoose');

const godSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            // required: [true, "Debes poner el nombre de la Generación" ]
        },

        lord:{
            type: String,
            // required: [true, "Debes poner de que es señor"]
        },

        symbols:{
            type: String,
        },

        powers:{
            type: String,
        },

        characteristics:{
            type: String,
        },

        chthonicCharacter:{
            type: String,
        },

        generations:{
            type: mongoose.Types.ObjectId,
            ref: 'generations',
        },

        offspring:{
            type: String,
        },

    },
    {
        timestamps: true,
    }
    );

const God = mongoose.model("gods",godSchema);

module.exports = God;