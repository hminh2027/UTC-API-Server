const express = require('express')
const router = express.Router()
const credit = require('../controllers/credit')

router.post('/', credit.credit)

module.exports = router