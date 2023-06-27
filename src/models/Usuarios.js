const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    password:String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;