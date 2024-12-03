const mongoose = require('mongoose')
const Operation = require('../../models/operation.model')
const YearlyStatistic = require('../../models/statistics/year.model')
const MonthlyStatistic = require('../../models/statistics/month.model')
const DailyStatistic = require('../../models/statistics/day.model')

module.exports.addOperation = async (type, value, date = new Date()) => {
    const session = await mongoose.startSession()
    session.startTransaction()
    try {
        const operation = new Operation({ type, value, date })
        await operation.save({ session })

        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        const yearlyUpdate =
            type === 'increment'
                ? { $inc: { totalIncrement: value } }
                : { $inc: { totalDecrement: value } }
        await YearlyStatistic.findOneAndUpdate({ year }, yearlyUpdate, {
            upsert: true,
            new: true,
            session,
        })

        const monthlyUpdate =
            type === 'increment'
                ? { $inc: { totalIncrement: value } }
                : { $inc: { totalDecrement: value } }
        await MonthlyStatistic.findOneAndUpdate(
            { year, month },
            monthlyUpdate,
            { upsert: true, new: true, session }
        )

        const dailyUpdate =
            type === 'increment'
                ? { $inc: { totalIncrement: value } }
                : { $inc: { totalDecrement: value } }
        await DailyStatistic.findOneAndUpdate(
            { year, month, day },
            dailyUpdate,
            { upsert: true, new: true, session }
        )

        await session.commitTransaction()
        session.endSession()

        console.log('Операция добавлена и статистика обновлена')
    } catch (error) {
        await session.abortTransaction()
        session.endSession()
        console.error('Ошибка при добавлении операции:', error)
    }
}

module.exports.getStatistics = async () => {
    try {
        const totalStats = await Operation.aggregate([
            {
                $group: {
                    _id: '$type',
                    total: { $sum: '$value' },
                },
            },
        ])

        const yearlyStats = await YearlyStatistic.find().sort({ year: 1 })
        const monthlyStats = await MonthlyStatistic.find().sort({
            year: 1,
            month: 1,
        })
        const dailyStats = await DailyStatistic.find().sort({
            year: 1,
            month: 1,
            day: 1,
        })

        return {
            total: totalStats,
            year: yearlyStats,
            month: monthlyStats,
            day: dailyStats,
        }
    } catch (error) {
        console.error('Ошибка при получении статистики:', error)
    }
}
