const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  // Ambil data semua detail_pembayaran
  getDataStock(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM warna_mobil;
                `,
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil ambil data!",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  // Ambil data detail_pembayaran berdasarkan ID
  getDataStockByID(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * from warna_mobil where id_warna = ?;
                `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil ambil data!",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  // Simpan data detail_pembayaran
  addDataStock(req, res) {
    let data = [
      req.body.id_mobil,
      req.body.warna,
      req.body.stock,
    ];
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call insert_warna(?);
                `,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil tambah data!",
          });
        }
      );
      connection.release();
    });
  },
  // Update data detail_pembayaran
  editDataStock(req, res) {
    let dataEdit = {
      id_mobil: req.body.id_mobil,
      warna: req.body.warna,
      stock: req.body.stock,
    };
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                UPDATE warna_mobil SET ? WHERE id_warna = ?;
                `,
        [dataEdit, id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil edit data!",
          });
        }
      );
      connection.release();
    });
  },
  // Delete data detail_pembayaran
  deleteDataStock(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call detele_stock(?);
                `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil hapus data!",
          });
        }
      );
      connection.release();
    });
  },
};
