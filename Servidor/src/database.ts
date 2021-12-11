import mysql  from 'mysql';
import keys from './keys';
const pool = mysql.createPool(keys.database);

// metodo de conexion a la base de datos

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB esta conectada');
})

export default pool;