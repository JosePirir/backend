'use strict'

const mongoose = require('mongoose');
const userController = require('./controllers/user.controller');
const app = require('./app');
const port = app.set('port', process.env.PORT || 3200);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pyme', {useNewUrlParser: true})
    .then(()=>{
    console.log('Conectado a la base de Datos :D');
    userController.createAdmin();
    app.listen(port, ()=>{
        console.log('servidor de express funcionando :D');
    })
})
.catch((err)=>{console.log('Error al tratar de contectarse a la base de datos', err)});