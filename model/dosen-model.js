const { dosen } = require('../config/index')

class Dosen {
    static getDosen() {
        return dosen
    }
    static getSatuDosen(id) {
        return dosen[id]
    }
    static addData(payload) {
        console.log(payload)
    }
}

module.exports = Dosen