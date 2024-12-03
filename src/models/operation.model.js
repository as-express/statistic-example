const mongoose = require('mongoose')

const operation = new mongoose.Schema({
    type: { type: String, enum: ['increment', 'decrement'], required: true },
    value: {
        type: Number,
        required: true,
        min: [0, 'Min value need be valid and more that 0'],
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
})

operation.index({ date: 1 })
operation.index({ type: 1, date: 1 })

const operationModel = mongoose.model('Operation', operation)
module.exports = operationModel
