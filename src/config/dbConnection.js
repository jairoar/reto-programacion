const mysql = require('mysql');

const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: '1234',
        port: 3306
});

connection.connect( (err) => {
    if(err){
        console.log(`El error de conexión a DB es: ${err}`)
        return;
    }
    console.log(`Conectado exitosamente [DB]`)
});

module.exports = connection;