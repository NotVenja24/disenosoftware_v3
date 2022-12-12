const mongoose = require('mongoose');

const lugarSchema = new mongoose.Schema({
    id: ID,
    nombre: String,
    descripcion: String,
    foto: String
});

module.exports = mongoose.model('lugar', lugarSchema);