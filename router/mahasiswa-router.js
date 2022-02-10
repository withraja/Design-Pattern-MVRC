const router = require('express').Router()
const { MahasiswaController } = require('../controller/index-controller')


router.get('/', MahasiswaController.getBios)
router.get('/:id', MahasiswaController.getBio)
router.post('/', MahasiswaController.addData)

module.exports = router

