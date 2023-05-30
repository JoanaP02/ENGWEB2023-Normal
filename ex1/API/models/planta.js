var mongoose = require('mongoose');


var moradaSchema = new mongoose.Schema({
    rua: String,
    numero: Number
});

var palntaSchema = new mongoose.Schema({
    "_id": Number,
    "Número de Registo": Number,
    "Código de rua": Number,
    "Rua": String,
    "Local": String,
    "Freguesia": String,
    "Espécie": String,
    "Nome Científico": String,
    "Origem": String,
    "Data de Plantação": String,
    "Estado": String,
    "Caldeira": String,
    "Tutor": String,
    "Implantação": String,
    "Gestor": String,
    "Data de actualização": String,
    "Número de intervenções": Number
});


module.exports = new mongoose.model('planta',treinoSchema);