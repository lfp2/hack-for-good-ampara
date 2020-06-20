const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const app = require('./app')
var helmet = require('helmet')
const slowDown = require("express-slow-down");

const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000,
    delayAfter: 100,
    delayMs: 500
});

app.use(helmet())

app.use(speedLimiter)

app.listen(process.env.PORT || 8080)
