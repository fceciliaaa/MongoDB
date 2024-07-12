const mongoose = require('mongoose');

const ColeccionEstudiantes = mongoose.Schema({
    name: {
        type: String
    },
    home_state: {
        type: String
    },
    lucky_number: {
        type: Number
    },
    birthday: {
        month: Number,
        day: Number,
        year: Number
    }
});

const Estudiantes = mongoose.model('estudiante', ColeccionEstudiantes);

module.exports = Estudiantes;