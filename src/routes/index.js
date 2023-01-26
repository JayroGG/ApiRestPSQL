//Requiring express router module
const { Router } = require('express')
const router =  Router()

//Requiring the controller functions
const { getMovies, getMovieByTitle, postMovie, updateMovie, deleteMovie, notFound } = require('../controllers/index.controller')

//Getting all movies
router.get('/movies', getMovies)

//Gettin one Movie
router.get('/movies/:title', getMovieByTitle)

//Creating a movie register
router.post('/movies',  postMovie)

//Updatind a movie register
router.patch('/movies/:id', updateMovie)

//Deleting a movie register
router.delete('/movies/:id', deleteMovie)

//Default 404
router.get('*', notFound)

//Exporting
module.exports = router
