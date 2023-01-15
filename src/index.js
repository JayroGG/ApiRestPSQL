require('dotenv').config()

//Requiring the modules
const express =  require('express')
const app = express()

//Middlewares
app.use(express.json())
    //No nested data
app.use(express.urlencoded({extended: false}))

//Setting the enpoint routes
const routes = require('./routes/index')
app.use('/', routes)

const port = process.env.APP_PORT || 3000 
//API Listening
app.listen(port, () => console.log('Server on port 3000'))
