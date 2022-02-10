const router = require('express').Router()
const dosenRouter = require('./dosen-router')
const mahasiswaRouter = require('./mahasiswa-router')
const homeRouter = require('./home-router')


router.use('/dosen', dosenRouter)
router.use('/mahasiswa', mahasiswaRouter)
router.use('/', homeRouter)


module.exports = router