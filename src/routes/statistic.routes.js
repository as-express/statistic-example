const express = require('express')
const StatisticController = require('../controllers/statistic.controller')
const { setStatistic } = require('../validators/statistic.validator')
const { handleValidationErrors } = require('../middleware/validator.middleware')

const router = express.Router()

router
    .route('/set')
    .post(
        setStatistic,
        handleValidationErrors,
        StatisticController.setStatistic
    )
router.route('/total').get(StatisticController.getStatistic)
router.route('/year').get(StatisticController.getYearStatistic)
router.route('/month').get(StatisticController.getMonthStatistic)
router.route('/day').get(StatisticController.getDayStatistic)

module.exports = router
