const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expense-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB is error !!')
})
db.once('open', () => {
  console.log('mongoDB is connected !!')
})

module.exports = db