const express = require('express')
const router = express.Router()
const credit = require('../controllers/credit')

router.get('/', credit.credit)

module.exports = router