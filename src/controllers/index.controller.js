//DB Conection
const { Pool } =  require('pg')

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

//Get all the movies function
const getMovies = async (req, res) => {
    try {
        //Making the SELECT query
        const response = await pool.query('SELECT * FROM movies')

        //Response
        res.status(200).json({data: response.rows})
        
    } catch (error) {
        res.status(500).json({data: [], message: error.message})
    }
    
}

//Get Movie by Name
const getMovieByTitle =  async (req, res) => {
    //Getting the title
    const title = req.params.title

    try {
        //Making the SELECT query
        const response = await pool.query('SELECT * FROM movies WHERE title = $1', [title])

        //Response
        res.status(200).json({data: response.rows})

    } catch (error) {
        res.status(500).json({data: [], message: error.message})
    }
}

//Creating a new movie register
const postMovie = async (req,res) =>{
    //Structuring of the body
    const { title, genre, release_date } = req.body

    try {
        //Insert into postgreSQL table
        const response =  await pool.query('INSERT INTO movies (title, genre, release_date) VALUES($1, $2, $3)', [title, genre, release_date])
        
        //Response
        res.status(201).json({
            message: 'Movie Succesfully Added',
            body: {
                movie: {title, genre, release_date}
            }
        }) 

    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
}

//Updating a movie
const updateMovie =  async (req, res) => {
    
    //Setting the values
    const id = req.params.id
    const { title, genre, release_date} = req.body

    try {
        //Making the UPDATE query
        const response = await pool.query('UPDATE movies SET title = $1, genre = $2, release_date = $3 WHERE id = $4', [title, genre, release_date, id])

        //Response 
        res.status(200).json({
            message: 'Movie Succesfully Updated',
            body: {
                movie: {title, genre, release_date}
            }
        }) 

    } catch (error) {
        res.status(400).json({message:  error.message})
    }
}

//Deleting a movie register
const deleteMovie = async (req, res) => {
    //Getting the id
    const id = req.params.id

    try {
        //Making the DELETE query
        const response = await pool.query('DELETE FROM movies WHERE title = $1', [id])

        //Response
        res.status(200).json('Movie with id = '+ id+' succesfully deleted')

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Not Found 404
const notFound = async (req, res) =>{
    try {
        res.status(404).json({data: [], message: "Whaat?"})
    } catch (error) {
        res.status(500).json({data: [], message: error.message})
    }
}
//Exporting the functions
module.exports =  {
    getMovies,
    getMovieByTitle,
    postMovie,
    updateMovie,
    deleteMovie,
    notFound  
}