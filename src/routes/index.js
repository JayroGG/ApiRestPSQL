//Requiring express router module
const { Router } = require('express')
const router =  Router()

//Requiring the controller functions
const { getMovies, getMovieById, postMovie, updateMovie, deleteMovie } = require('../controllers/index.controller')

//Getting all movies
router.get('/movies', getMovies)

//Gettin one Movie
router.get('/movies/:id', getMovieById)

//Creating a movie register
router.post('/movies',  postMovie)

//Updatind a movie register
router.put('/movies/:id', updateMovie)

//Deleting a movie register
router.delete('/movies/:id', deleteMovie)



//Exporting
module.exports = router
