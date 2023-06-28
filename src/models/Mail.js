const mongoose = require('mongoose');
const { Schema } = mongoose;

const MailSchema = new Schema({
    name:String,
    email:String,
    telefono:String,
});

const Mail = mongoose.model('Mail', MailSchema);

module.exports = Mail;