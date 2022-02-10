const router = require('express').Router()
const { HomeController } = require('../controller/index-controller')

router.use('/', HomeController.home)

module.exports = router