const express = require('express')
const router = express.Router()
const mark = require('../controllers/mark')

router.post('/', mark.getMarks)
router.post('/:grade', mark.getMarks)

module.exports = router