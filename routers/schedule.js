const express = require('express')
const router = express.Router()
const schedule = require('../controllers/schedule')

router.get('/', schedule.schedule)

module.exports = router