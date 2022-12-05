const konsumen = require('./controller-konsumen');
const staff = require('./controller-staff')
const mobil = require('./controller-mobil')
const detail = require('./controller-detail-pembayaran')
const stock = require('./controller-warna-mobil')
const pembayaran = require('./controller-pembayaran')

module.exports ={
	konsumen, staff, mobil, detail, stock, pembayaran
};