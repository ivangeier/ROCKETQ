const sqlite3 = require('sqlite3');
const { open } = require('sqlite'); // Find only the 'open' functions from SQLite 

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })

