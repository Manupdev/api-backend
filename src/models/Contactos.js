const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactosSchema = new Schema({
    name:String,
    email:String,
    telefono:String,
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;