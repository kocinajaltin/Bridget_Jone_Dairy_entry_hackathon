require('dotenv').config()
const fs = require('fs')

const db = require('./connect')

//This is to read the sql file
const sql = fs.readFileSync('./server/database/setup.sql').toString()

//This is to execute a SQL query,wait for it to finish, then close the database connection, and log a message when setup is complete.
db.query(sql)
    .then(data => {
        db.end()
        console.log('Setup complete')
    })
    .catch((error) => console.log(error))