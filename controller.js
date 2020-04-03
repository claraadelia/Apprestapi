'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};


// menampilkan semua data mahasiswa berdasarkan id nyaa
exports.tampilsemuaid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
};


// menambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
    [nim,nama,jurusan],
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!", res)
        }
    });
};

// mengubah data berdasarkan id
exports.ubahmahasiswa = function(req , res){
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id=?', [nim, nama , jurusan,id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Ubah Data", res)
            }
        });
    };

    //menghapus data mahasiswa
exports.hapusmahasiswa = function(req, res){
    var id = req.body.id;
    connection.query('DELETE FROM mahasiswa WHERE id=?', [id],
    function(error,rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok("Berhasil Menghapus Data", res)
        }
    });
    };