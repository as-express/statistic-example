const express = require('express')
const dotenv = require('dotenv').config()
const databaseConnection = require('../config/database.config')
require('colors')
const statisticRoutes = require('../src/routes/statistic.routes')

const app = express()
const port = 3000 || process.env.PORT()
databaseConnection()

app.use(
    express.json({
        limit: '20kb',
    })
)

app.use('/api', statisticRoutes)

app.listen(port, () => {
    console.log(`Server run on port ${port} 🚀`.bgGreen)
})
