const express = require('express')
const router = express.Router()

router.get('/:category', (req, res) => {
  const sort = req.params.category
  console.log(sort)
})

module.exports = router