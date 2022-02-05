const express = require('express')
const router = express.Router()
const mark = require('../controllers/mark')

router.post('/gpa/', mark.getGPA)
router.post('/gpa/:year', mark.getGPA)
router.post('/', mark.getMarks)
router.post('/:grade', mark.getMarks)


module.exports = router