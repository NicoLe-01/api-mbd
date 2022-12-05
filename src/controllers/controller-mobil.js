const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua karyawan
    getDataMobil(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                Call GetAllMobil();
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },
    // Ambil data karyawan berdasarkan ID
    getDataMobilByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                CALL get_data_mobil_byId(?);
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        })
    },
    // Simpan data karyawan
    addDataMobil(req,res){
        let data = {
            nama_mobil : req.body.nama,
            jenis_mobil : req.body.jenis,
            tenaga_mobil : req.body.tenaga,
            tanggal_produksi : req.body.tanggal_produksi,
            asal_produksi : req.body.asal_produksi,
            jenis_transmisi : req.body.jenis_transmisi,
            harga_mobil : req.body.harga
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO mobil SET ?;
                `
            , [data],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil tambah data!',
                });
            });
            connection.release();
        })
    },
    // Update data karyawan
    editDataMobil(req,res){
        let dataEdit = {
            nama_mobil : req.body.nama,
            jenis_mobil : req.body.jenis,
            tenaga_mobil : req.body.tenaga,
            tanggal_produksi : req.body.tanggal_produksi,
            asal_produksi : req.body.asal_produksi,
            jenis_transmisi : req.body.jenis_transmisi,
            harga_mobil : req.body.harga
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE mobil SET ? WHERE id_mobil = ?;
                `
            , [dataEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },
    // Delete data karyawan
    deleteDataMobil(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM mobil WHERE id_mobil = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}
        