const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const record = require('./modules/record')
const sort = require('./modules/sort')

router.use('/', home)
router.use('/record', record)
router.use('/sort', sort)

module.exports = router