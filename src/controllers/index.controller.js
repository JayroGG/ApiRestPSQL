const { Worker } = require('worker_threads')
const pool = require('../db/dbConection.js')

// Get all the movies function
const getMovies = async (req, res) => {
    const params = new URLSearchParams(`http://localhost:3000${req.url}`)
    const limit = params.get('limit')
    const offset = params.get('offset')
    try {
        // Making the SELECT query
        const response = await pool.query('SELECT * FROM movies limit $1 offset $2', [limit, offset])
        // Response
        res.status(200).json({ data: response.rows })
    } catch (error) {
        res.status(500).json({ data: [], message: error.message })
    }
}

// Get Movie by Name
const getMovieByTitle = async (req, res) => {
    // Getting the title
    const title = `%${req.params.title}%`
    const query = 'SELECT * FROM movies WHERE title like $1'
    try {
        // Making the SELECT query
        const response = await pool.query(query, [title])
        // Response
        if (response.rows.length === 0) {
            res.status(404).json({ data: [], message: 'Movie not found'})
        } else {
            res.status(200).json({ data: response.rows })
        }
    } catch (error) {
        res.status(500).json({ data: [], message: error.message })
    }
}

// Get Movie by id
const getMovieById = async (req, res) => {
    // Getting the id
    const id = req.params.id
    const query = 'SELECT * FROM movies WHERE id = $1'
    try {
        // Making the SELECT query
        const response = await pool.query(query, [id])
        // Response
        res.status(200).json({ data: response.rows })
    } catch (error) {
        res.status(500).json({ data: [], message: error.message })
    }
}

// Creating a new movie register
const createMovie = async (req, res) => {
    // Destructuring of the body
    const { title, genre, release_date } = req.body
     try {
        // Insert into postgreSQL table
        const response = await pool.query('INSERT INTO movies (title, genre, release_date) VALUES($1, $2, $3)', [title, genre, release_date])
        // Response
        res.status(201).json({
            message: 'Movie Succesfully Added',
            body: {
                movie: { title, genre, release_date }
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Updating a movie
const updateMovieById = async (req, res) => {
    // Setting the values
    const id = req.params.id
    const { title, genre, release_date } = req.body
    try {
        // Making the UPDATE query
        const response = await pool.query('UPDATE movies SET title = $1, genre = $2, release_date = $3 WHERE id = $4', [title, genre, release_date, id])

        // Response 
        res.status(200).json({
            message: 'Movie Succesfully Updated',
            body: {
                movie: { title, genre, release_date }
            }
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Deleting a movie register
const deleteMovieById = async (req, res) => {
    // Getting the id
    const id = req.params.id
    try {
        // Making the DELETE query
        const response = await pool.query('DELETE FROM movies WHERE id = $1', [id])
        // Response
        res.status(200).json(`Movie with id = ${id} succesfully deleted`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Not Found 404
const notFound = async (req, res) => {
    try {
        res.status(404).json({ data: [], message: "Whaat?" })
    } catch (error) {
        res.status(500).json({ data: [], message: error.message })
    }
}

// Heavy controller
const heavyLogic = async (req, res) => {
    const countWorker = new Worker('./src/controllers/workers/countWorker.js')
    countWorker.on('message', ({ total, message }) => {
        res.status(200).json({ data: [total], message: message })
    })
}

// Exporting the functions
module.exports = {
    getMovies,
    getMovieByTitle,
    getMovieById,
    createMovie,
    updateMovieById,
    deleteMovieById,
    notFound,
    heavyLogic
}