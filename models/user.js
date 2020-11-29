const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    birthDate:  String,
    country: String,
    city: String,
    nationality: String
})

module.exports = mongoose.model('user', userSchema);