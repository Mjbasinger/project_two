const mongoose = require('mongoose');

const kaijuSchema = mongoose.Schema({
    name: String,
    alias: String, 
    image: String, 
    type: String,
    size: Number,
    weight: Number,
    firstSeen: String,
    lastSeen: String,
    notes: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Kaiju = mongoose.model('Kaiju', kaijuSchema);
module.exports = Kaiju;