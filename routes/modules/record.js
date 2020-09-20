const express = require('express')
const router = express.Router()
const record = require('../../models/record')
const category = require('../../models/category')

router.get('/create', (req, res) => {
  category.find()
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

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  record.findById(id)
    .lean()
    .then(record => {
      const selectedCategory = record.category
      // console.log(selectedCategory)
      category.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(category => {
          const filterCategory = category.filter(e => e.name !== selectedCategory)

          res.render('edit', { record, category: filterCategory })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))

})

router.put('/:id', (req, res) => {
  const id = req.params.id
  record.findById(id)
    .then(record => {
      const { name, date, amount, category, description } = req.body
      let categoryArry = category.split(',')
      const data = {
        name,
        date,
        amount,
        category: categoryArry[0],
        icon: categoryArry[1],
        description
      }
      Object.assign(record, data)
      return record.save()
    })
    .then(() => res.redirect('/'))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router