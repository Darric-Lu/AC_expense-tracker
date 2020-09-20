const express = require('express')
const router = express.Router()
const record = require('../../models/record')
const categories = require('../../models/category')

router.get('/create', (req, res) => {
  categories.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(category => {
      res.render('new', { category })
    })
})

router.post('/', (req, res) => {
  const { name, date, amount, category, description } = req.body
  let categoryArry = category.split(',')
  record.create({
    name,
    date,
    amount,
    category: categoryArry[0],
    icon: categoryArry[1],
    description
  })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})
module.exports = router