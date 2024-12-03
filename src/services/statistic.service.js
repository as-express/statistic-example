const helper = require('../common/helpers/statistic.helper')
const yearModel = require('../models/statistics/year.model')
const monthModel = require('../models/statistics/month.model')
const dayModel = require('../models/statistics/day.model')

class StatisticService {
    constructor() {
        this.statistic = helper
        this.year = yearModel
        this.month = monthModel
        this.day = dayModel
    }

    async setStatistic(type, value, date) {
        try {
            await this.statistic.addOperation(type, value, date)
            return true
        } catch (err) {
            this.handleError(err)
        }
    }

    async getStatistic() {
        try {
            const statistic = await this.statistic.getStatistics()
            return statistic
        } catch (err) {
            this.handleError(err)
        }
    }

    async getYearStatistic(year) {
        try {
            const statistic = await this.year.findOne({ year })
            return statistic
        } catch (err) {
            this.handleError(err)
        }
    }

    async getMonthStatistic(year, month) {
        try {
            const statistic = await this.month.findOne({ year, month })
            return statistic
        } catch (err) {
            this.handleError(err)
        }
    }

    async getDayStatistic(year, month, day) {
        try {
            const statistic = await this.day.findOne({ year, month, day })
            return statistic
        } catch (err) {
            this.handleError(err)
        }
    }

    handleError(err) {
        console.log('Server error', err.message)
    }
}

module.exports = StatisticService
