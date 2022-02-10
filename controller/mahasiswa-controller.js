const { Mahasiswa } = require('../model/index-model')

class MahasiswaController {
    static getBios(req, res) {
        const data = Mahasiswa.getMahasiswa()
        res.render('mahasiswa', { data })
        return
    }
    static getBio(req, res) {
        const id = req.params.id
        const data = Mahasiswa.getSatuMahasiswa(id)
        res.status(200).json(data)
        return
    }
    static addData(req, res) {
        const { nama, domisili, kelamin } = req.body
        Mahasiswa.addData({ nama, domisili, kelamin })
        res.redirect('/')
    }
}

module.exports = MahasiswaController
