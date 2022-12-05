const router = require("express").Router();
const e = require("express");
const { konsumen, staff, mobil, detail, stock, pembayaran } = require("../controllers");

// GET localhost:8080/konsumen => Ambil data semua konsumen
router.get("/konsumen", konsumen.getDataKonsumen);

// GET localhost:8080/konsumen/2 => Ambil data semua konsumen berdasarkan id = 2
router.get("/konsumen/:id", konsumen.getDataKonsumenByID);

// POST localhost:8080/konsumen/add => Tambah data konsumen ke database
router.post("/konsumen/add", konsumen.addDataKonsumen);

// POST localhost:8080/konsumen/2 => Edit data konsumen
router.post("/konsumen/edit", konsumen.editDataKonsumen);

// POST localhost:8080/konsumen/delete => Delete data konsumen
router.post("/konsumen/delete/", konsumen.deleteDataKonsumen);



// router untuk staff
// GET localhost:8080/staff => Ambil data semua staff
router.get("/staff", staff.getDatastaff);

// GET localhost:8080/staff/2 => Ambil data semua staff berdasarkan id = 2
router.get("/staff/:id", staff.getDatastaffByID);

// POST localhost:8080/staff/add => Tambah data staff ke database
router.post("/staff/add", staff.addDatastaff);

// POST localhost:8080/staff/2 => Edit data staff
router.post("/staff/edit", staff.editDatastaff);

// POST localhost:8080/staff/delete => Delete data staff
router.post("/staff/delete/", staff.deleteDatastaff);



// router untuk mobil
// GET localhost:8080/mobil => Ambil data semua mobil
router.get("/mobil", mobil.getDataMobil);

// GET localhost:8080/mobil/2 => Ambil data semua mobil berdasarkan id = 2
router.get("/mobil/:id", mobil.getDataMobilByID);

// POST localhost:8080/mobil/add => Tambah data mobil ke database
router.post("/mobil/add", mobil.addDataMobil);

// POST localhost:8080/mobil/2 => Edit data mobil
router.post("/mobil/edit", mobil.editDataMobil);

// POST localhost:8080/mobil/delete => Delete data mobil
router.post("/mobil/delete/", mobil.deleteDataMobil);



// router untuk detail
// GET localhost:8080/detail => Ambil data semua detail
router.get("/detail", detail.getDataDetail);

// GET localhost:8080/detail/2 => Ambil data semua detail berdasarkan id = 2
router.get("/detail/:id", detail.getDataDetailByID);

// POST localhost:8080/detail/add => Tambah data detail ke database
router.post("/detail/add", detail.addDataDetail);

// POST localhost:8080/detail/2 => Edit data detail
router.post("/detail/edit", detail.editDataDetail);

// POST localhost:8080/detail/delete => Delete data detail
router.post("/detail/delete/", detail.deleteDataDetail);



// router untuk stock
// GET localhost:8080/stock => Ambil data semua stock
router.get("/stock", stock.getDataStock);

// GET localhost:8080/stock/2 => Ambil data semua stock berdasarkan id = 2
router.get("/stock/:id", stock.getDataStockByID);

// POST localhost:8080/stock/add => Tambah data stock ke database
router.post("/stock/add", stock.addDataStock);

// POST localhost:8080/stock/2 => Edit data stock
router.post("/stock/edit", stock.editDataStock);

// POST localhost:8080/stock/delete => Delete data stock
router.post("/stock/delete/", stock.deleteDataStock);



// router untuk pembayaran
// GET localhost:8080/pembayaran => Ambil data semua pembayaran
router.get("/pembayaran", pembayaran.getDataPembayaran);

// GET localhost:8080/pembayaran/2 => Ambil data semua pembayaran berdasarkan id = 2
router.get("/pembayaran/:id", pembayaran.getDataPembayaranByID);

// POST localhost:8080/pembayaran/add => Tambah data pembayaran ke database
router.post("/pembayaran/add", pembayaran.addDataPembayaran);

// POST localhost:8080/pembayaran/2 => Edit data pembayaran
router.post("/pembayaran/edit", pembayaran.editDataPembayaran);

// POST localhost:8080/pembayaran/delete => Delete data pembayaran
router.post("/pembayaran/delete/", pembayaran.deleteDataPembayaran);


module.exports = router;