var mysql = require('mysql');

//buat koneksi database
const coon = mysql.createConnection({
    host: 'localhost',
    user:'root',
    passwod:'',
    database:'dbrestapi'
});

conn.connet((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

module.exports = coon;