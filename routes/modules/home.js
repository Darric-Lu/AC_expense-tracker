const express = require('express')
const router = express.Router()
const records = require('../../models/record')
const categories = require('../../models/category')

router.get('/', (req, res) => {
  records.find()
    .lean()
    .sort({ date: 'asc' })
    .then(record => {
      let total = 0
      record.forEach(e => {
        total += Number(e.amount)
      })
      categories.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(category => {
          res.render('index', { total, category, record })
        })
    })
    .catch(error => console.error(error))
})

module.exports = router 