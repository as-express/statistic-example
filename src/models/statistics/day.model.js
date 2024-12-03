const mongoose = require('mongoose')

const day = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    day: {
        type: Number,
        required: true,
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

day.index({ year: 1, month: 1, day: 1 }, { unique: true })

const dayModel = mongoose.model('Day', day)
module.exports = dayModel
