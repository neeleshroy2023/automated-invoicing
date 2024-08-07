const express = require('express')
const app = express()
const connectDb = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')

connectDb()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/invoices', require('./routes/invoices'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
