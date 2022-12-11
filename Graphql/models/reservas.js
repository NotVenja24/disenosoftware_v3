const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    fecha: Date,
    nombre_viaje: String
});

module.exports = mongoose.model('reserva', reservaSchema);