require('dotenv').config()

//Requiring the modules
const express =  require('express')
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Setting the enpoint routes
const routes = require('./routes/index')
app.use('/', routes)

//API Listening
app.listen(3000, () => console.log('Server on port 3000'))
