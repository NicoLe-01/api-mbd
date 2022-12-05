const router = require('express').Router();
const { konsumen, staff, mobil } = require('../controllers');

// GET localhost:8080/konsumen => Ambil data semua konsumen
router.get('/konsumen', konsumen.getDataKonsumen);

// GET localhost:8080/konsumen/2 => Ambil data semua konsumen berdasarkan id = 2
router.get('/konsumen/:id', konsumen.getDataKonsumenByID);

// POST localhost:8080/konsumen/add => Tambah data konsumen ke database
router.post('/konsumen/add', konsumen.addDataKonsumen);

// POST localhost:8080/konsumen/2 => Edit data konsumen
router.post('/konsumen/edit', konsumen.editDataKonsumen);

// POST localhost:8080/konsumen/delete => Delete data konsumen
router.post('/konsumen/delete/', konsumen.deleteDataKonsumen);


// router untuk staff
// GET localhost:8080/staff => Ambil data semua staff
router.get('/staff', staff.getDatastaff);

// GET localhost:8080/staff/2 => Ambil data semua staff berdasarkan id = 2
router.get('/staff/:id', staff.getDatastaffByID);

// POST localhost:8080/staff/add => Tambah data staff ke database
router.post('/staff/add', staff.addDatastaff);

// POST localhost:8080/staff/2 => Edit data staff
router.post('/staff/edit', staff.editDatastaff);

// POST localhost:8080/staff/delete => Delete data staff
router.post('/staff/delete/', staff.deleteDatastaff);


// router untuk mobil
// GET localhost:8080/mobil => Ambil data semua mobil
router.get('/mobil', mobil.getDataMobil);

// GET localhost:8080/mobil/2 => Ambil data semua mobil berdasarkan id = 2
router.get('/mobil/:id', mobil.getDataMobilByID);

// POST localhost:8080/mobil/add => Tambah data mobil ke database
router.post('/mobil/add', mobil.addDataMobil);

// POST localhost:8080/mobil/2 => Edit data mobil
router.post('/mobil/edit', mobil.editDataMobil);

// POST localhost:8080/mobil/delete => Delete data mobil
router.post('/mobil/delete/', mobil.deleteDataMobil);



module.exports = router;

