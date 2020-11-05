const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "takeabunch",
    password: "TCGPC1",
    port: 5432
})

const getUsers = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

const createUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, surname, email, physical_address } = req.body;
        pool.query('INSERT INTO users(name, surname, email, physical_address) VALUES ($1, $2, $3, $4) RETURNING *', [name, surname, email, physical_address], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new user has been added added: ${results.rows[0]}`)
        })
    })
}

const deleteUser = () => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`User deleted with ID: ${id}`)
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
}