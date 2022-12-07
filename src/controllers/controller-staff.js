const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  getDatastaff(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                CALL GetAllStaff();
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
  //    fungsi untuk DatastaffByID
  getDatastaffByID(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM staff WHERE id_staff = ?;
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

  addDatastaff(req, res) {
    let data = [req.body.nama, req.body.alamat, req.body.no_hp];
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call insert_staff(?);
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
  editDatastaff(req, res) {
    let dataEdit = [
      req.body.id,
      req.body.nama,
      req.body.alamat,
      req.body.no_hp,
    ];
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call update_staff(?);
                `,
        [dataEdit],
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
  deleteDatastaff(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                call detele_staff(?);
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
