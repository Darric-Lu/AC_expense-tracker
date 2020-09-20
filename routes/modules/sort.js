const express = require('express')
const router = express.Router()
const record = require('../../models/record')
const categories = require('../../models/category')

router.get('/:category', (req, res) => {
  const sort = req.params.category
  record.find()
    .lean()
    .then(record => {
      const filterRecord = record.filter(e => e.category === sort)
      let total = 0
      filterRecord.forEach(e => {
        total += Number(e.amount)
      })
      categories.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(category => {
          res.render('index', { total, category, record: filterRecord })
        })
    })
    .catch(error => console.log(error))
})

module.exports = router