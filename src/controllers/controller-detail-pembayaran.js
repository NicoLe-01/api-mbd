const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  // Ambil data semua detail_pembayaran
  getDataDetail(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM detail_pembayaran;
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
  getDataDetailByID(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * from detail_pembayaran where id_detail = ?;
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
  addDataDetail(req, res) {
    let data = [
      req.body.id_pembayaran,
      req.body.id_mobil,
      req.body.id_warna,
      req.body.harga,
      req.body.jumlah_pembelian,
    ];
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call insert_detail_pembayaran_rill(?);

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
  editDataDetail(req, res) {
    let dataEdit = {
      id_pembayaran: req.body.id_pembayaran,
      id_mobil: req.body.id_mobil,
      id_warna: req.body.id_warna,
      harga: req.body.harga,
      jumlah_pembelian: req.body.jumlah_pembelian,
    };
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                UPDATE detail_pembayaran SET ? WHERE id_detail = ?;
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
  deleteDataDetail(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call detele_detail_pembayaran(?);
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
