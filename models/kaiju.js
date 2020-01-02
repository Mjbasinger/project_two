const mongoose = require('mongoose');

const kaijuSchema = mongoose.Schema({
    name: String,
    alias: String, 
    image: String, 
    size: Number,
    weight: Number,
    firstSeen: String,
    lastSeen: String,
    notes: String
})

const Kaiju = mongoose.model('Kaiju', kaijuSchema);
module.exports = Kaiju;