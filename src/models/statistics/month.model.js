const mongoose = require('mongoose')

const month = new mongoose.Schema({
    year: {
        type: Number,
        required: true,
    },
    month: {
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

month.index({ year: 1, month: 1 }, { unique: true })

const monthModel = mongoose.model('Month', month)
module.exports = monthModel
