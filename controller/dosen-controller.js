const { Dosen } = require('../model/index-model')

class DosenController {
    static getBios(req, res) {
        const data = Dosen.getDosen()
        res.render('dosen', { data })
        return
    }
    static getBio(req, res) {
        const id = req.params.id
        const data = Dosen.getSatuDosen(id)
        res.status(200).json(data)
        return
    }
    static addData(req, res) {
        const { nama, matkul } = req.body
        Dosen.addData({nama, matkul})
        res.redirect("/")
    }
}

module.exports = DosenController