const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            required: [true, "Debes poner el nombre de la Generación" ]
        },

        description:{
            type: String,
            required: [true, "Debes poner una descripción"]
        },

        creators:{
            type: String,
        },

        gods:{
            type: String,
        },
    },
    {
        timestamps: true,
    }
    );

const Generation = mongoose.model("generations",generationSchema);

module.exports = Generation;