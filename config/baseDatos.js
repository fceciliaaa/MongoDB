const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user_name>:<password>@cluster0.6lnoxxb.mongodb.net/my_first_db?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Conexión exitosa a la base de datos 'my_first_db'");
    })
    .catch((error) => {
        console.log(`Hubo un error al conectar con la base de datos: ${error}`);
    });
