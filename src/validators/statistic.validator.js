const { check } = require('express-validator')

module.exports.setStatistic = [
    check('type').notEmpty().withMessage('Type is required'),
    check('value').notEmpty().isNumeric().withMessage('Value is required'),
]
