const express = require('express')
const router = express.Router()
const mark = require('../controllers/mark')

router.post('/', mark.mark)

module.exports = router