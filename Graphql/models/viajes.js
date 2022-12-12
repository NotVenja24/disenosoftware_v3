const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
    nombre:String,
    descripción:String,
    foto:String
});

module.exports = mongoose.model('viaje', viajeSchema);