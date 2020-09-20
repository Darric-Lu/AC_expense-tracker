const category = require('../category')
const db = require('../../config/mongoose')

db.on('error', () => {
  console.log('category mongoDB error !!')
})

db.once('open', () => {
  category.create({
    name: '家居物業',
    icon: 'fas fa-home',
  }, {
    name: '交通出行',
    icon: 'fas fa-shuttle-van',
  }, {
    name: '休閒娛樂',
    icon: 'fas fa-grin-beam',
  }, {
    name: '餐飲食品',
    icon: 'fas fa-utensils',
  }, {
    name: '其他',
    icon: 'fas fa-pen',
  })
  console.log('categorySeeder done')
})