const { mahasiswa } = require('../config/index')

class Mahasiswa {
    static getMahasiswa() {
        return mahasiswa
    }
    static getSatuMahasiswa(id) {
        return mahasiswa[id]
    }
    static addData(payload) {
        console.log(payload)
    }
}

module.exports = Mahasiswa