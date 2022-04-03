const mysql = require("mysql")
// AWS RDS를 위한 작업
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql",
    user: 'root',
    password: 'seungree',
    database: 'myapp'
})

exports.pool = pool;