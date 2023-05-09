const mongoose = require('mongoose');
const {Schema} = mongoose;

const sneakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 1
    }
})

const Sneaker = mongoose.model('Sneaker', sneakerSchema)
module.exports = Sneaker