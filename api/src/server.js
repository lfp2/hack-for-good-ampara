const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const app = require('./app')

app.listen(process.env.PORT || 8080)
