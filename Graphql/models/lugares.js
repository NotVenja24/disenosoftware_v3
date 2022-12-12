const mongoose = require('mongoose');

const lugarSchema = new mongoose.Schema({
    id:id,
    nombre:String,
    descripción:String,
    foto:String
});

module.exports = mongoose.model('lugar', lugarSchema);