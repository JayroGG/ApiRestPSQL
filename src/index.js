require('dotenv').config()

//Requiring the modules
const express =  require('express')
const cors = require('cors')
const app = express()

//Accepted origin list of clients
//const whiteList = ['http://localhost:3000']

//Middlewares
app.use(cors())
app.use(express.json())

//No nested data
app.use(express.urlencoded({extended: false}))

//Setting the enpoint routes
const routes = require('./routes/index')
app.use('/', routes)

//API Listening
const port = process.env.APP_PORT || 3000 
app.listen(port, () => console.log(`Server on Port: ${port}`))
