require('dotenv').config()

// Requiring the modules
const express = require('express')
const cors = require('cors')
const app = express()
const compression = require('compression')
const whiteList = [process.env.ORIGIN] || ['http://192.168.68.121:3000']

// Filter compression
const filterCompression = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}

// Middlewares
app.use(cors({ // Cross Origin
  origin: whiteList,
  allowedHeaders: ['Content-Type'],
}))

app.use(compression({  // Compression above 10 KB
  level: 6,
  threshold: 10 * 1000,
  filter: filterCompression
}))

app.use(express.json()) // Encoding json
app.use(express.urlencoded({ extended: false })) //No nested data

// Setting the enpoint routes
const routes = require('./routes/index')
app.use('/', routes)

// API Listening
const port = process.env.APP_PORT || 3000
app.listen(port, () => console.log(`Server on Port: ${port}`))
