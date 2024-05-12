require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const currencyRouter = require( './routes/currencyRouter')
const PORT = process.env.PORT||3500

app.use(cors()) 
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected successfully to the database..'))

app.use('/api/v1/currency', currencyRouter) 

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`)) 