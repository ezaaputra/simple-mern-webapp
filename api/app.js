const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4000
const mongoose = require('mongoose')
const cors = require('cors')
const moment = require('moment')

// import routes
const productsRoute = require('./routes/products')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connect to DB')
})

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
  // const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
  // const data = {
  //   "description": "run!",
  //   "port_used": port,
  //   timestamp
  // }
  // res.status(200).json(data)
  res.send('run!')
})
app.use('/products', productsRoute)

module.exports = app