const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'cocido',
    password: 'astral514',
    database: 'mpc',
    port: '5432'
});

module.exports = pool

