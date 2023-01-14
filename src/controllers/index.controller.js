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
        //Making a query to DB
        const response = await pool.query('SELECT * FROM movies')
        res.json(response.rows)
        console.log(response.rows)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}
//Exporting the functions
module.exports =  {
    getMovies
}