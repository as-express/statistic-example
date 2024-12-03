const StatisticService = require('../services/statistic.service')

class StatisticController {
    constructor() {
        this.service = new StatisticService()
        this.setStatistic = this.setStatistic.bind(this)
        this.getStatistic = this.getStatistic.bind(this)
        this.getYearStatistic = this.getYearStatistic.bind(this)
        this.getMonthStatistic = this.getMonthStatistic.bind(this)
        this.getDayStatistic = this.getDayStatistic.bind(this)
    }

    async setStatistic(req, res) {
        try {
            const { type, value } = req.body
            const result = await this.service.setStatistic(
                type,
                value,
                new Date()
            )
            res.status(200).json(result)
        } catch (err) {
            this.handleError(err, res)
        }
    }

    async getStatistic(req, res) {
        try {
            const statistic = await this.service.getStatistic()
            res.status(200).json(statistic)
        } catch (err) {
            this.handleError(err, res)
        }
    }

    async getYearStatistic(req, res) {
        try {
            const { year } = req.query
            const statistic = await this.service.getYearStatistic(year)

            res.status(200).json(statistic)
        } catch (err) {
            this.handleError(err, res)
        }
    }

    async getMonthStatistic(req, res) {
        try {
            const { year, month } = req.query

            const statistic = await this.service.getMonthStatistic(year, month)
            res.status(200).json(statistic)
        } catch (err) {
            this.handleError(err, res)
        }
    }

    async getDayStatistic(req, res) {
        try {
            const { year, month, day } = req.query

            const statistic = await this.service.getDayStatistic(
                year,
                month,
                day
            )
            res.status(200).json(statistic)
        } catch (err) {
            this.handleError(err, res)
        }
    }

    handleError(err, res) {
        console.log('Server Error', err.message)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = new StatisticController()
