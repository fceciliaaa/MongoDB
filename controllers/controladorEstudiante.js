const Estudiantes = require('./../model/modeloEstudiante');

module.exports.todosLosEstudiantes = (req, res) => {
    Estudiantes.find()
        .then((listaEstudiantes) => {
            return res.status(200).json(listaEstudiantes);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.obtenerPorEstado = (req, res) => {
    Estudiantes.find({home_state: req.params.state})
        .then((estudianteEncontrado) => {
            if(!estudianteEncontrado){
                res.statusMessage = 'Estudiante en ese estado no encontrado.';
                return res.status(404).json({mensaje: 'Estudiante en ese estado no encontrado.'}); 
            }
            return res.status(200).json(estudianteEncontrado);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.obtenerPorNumeroSuerte = (req, res) => {
    Estudiantes.findOne({lucky_number: req.params.lucky})
        .then((estudianteEncontrado) => {
            if(!estudianteEncontrado){
                res.statusMessage = 'Estudiante con ese numero de la suerte no encontrado.';
                return res.status(404).json({mensaje: 'Estudiante con ese numero de la suerte no encontrado.'}); 
            }
            return res.status(200).json(estudianteEncontrado);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.agregarEstudiante = (req, res) =>{
    const {name, home_state, lucky_number, birthday} = req.body
    
    if(!name || !home_state || !lucky_number || !birthday){
        res.statusMessage = 'Por favor proporcionar nombre, numero de la suerte, estado y cumpleaños';
        return res.status(406).json({mensaje: 'Por favor proporcionar nombre, numero de la suerte, estado y cumpleaños'})
    }

    Estudiantes.create(req.body) 
        .then((nuevoUsuario) => {
            return res.status(201).json(nuevoUsuario);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
}


module.exports.removerEstudiante = (req, res) => {
    Estudiantes.findOneAndDelete({name: req.params.name})
        .then(() => {
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};