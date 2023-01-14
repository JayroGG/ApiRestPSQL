//Requiring express router module
const { Router } = require('express')
const router =  Router()

//Requiring the controller functions
const { getMovies } = require('../controllers/index.controller')

//Getting all
router.get('/movies', getMovies)

//Exporting
module.exports = router
