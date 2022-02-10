const router = require('express').Router()
const { DosenController } = require('../controller/index-controller')

// router.get('/views', (req, res) => {
//     res.render("dosen")
// })

router.get('/', DosenController.getBios)
router.get('/:id', DosenController.getBio)
router.post('/', DosenController.addData)


module.exports = router

