const mongoose = require('mongoose')

const year = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
        unique: true,
    },
    totalIncrement: {
        type: Number,
        default: 0,
    },
    totalDecrement: {
        type: Number,
        default: 0,
    },
})

const yearModel = mongoose.model('Year', year)
module.exports = yearModel
