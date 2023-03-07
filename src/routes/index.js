//Requiring express router module
const { Router } = require('express')
const router = Router()

//Requiring the controller functions
const { getMovies, getMovieByTitle, postMovie, updateMovie, deleteMovie, notFound, heavyLogic, getMovieById } = require('../controllers/index.controller')

//Getting all movies
router.get('/movies', getMovies)

//Gettin Movies that match the name
router.get('/movies/:title', getMovieByTitle)

//Gettin one Movie by it's ID
router.get('/movies/byId/:id', getMovieById)

//Creating a movie register
router.post('/movies', postMovie)

//Updatind a movie register
router.patch('/movies/:id', updateMovie)

//Deleting a movie register
router.delete('/movies/:id', deleteMovie)

//Heavy cost operation
router.get('/heavy', heavyLogic)

//Default 404
router.get('*', notFound)

//Exporting
module.exports = router
