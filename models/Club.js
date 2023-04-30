const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Clubschema = new Schema({
    name: {
        type: String,
        required: true
    }, players: {
        type: String,
        required: true
    }, coach: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('clubs', Clubschema)