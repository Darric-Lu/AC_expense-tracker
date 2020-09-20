const record = require('../record')
const db = require('../../config/mongoose')

db.on('error', () => {
  console.log('record mongoDB error !!')
})

db.once('open', () => {
  record.create({
    name: '蛋餅',
    date: '2020-08-23',
    category: '餐飲食品',
    amount: '35',
    description: '餅皮太焦',
    icon: 'fas fa-utensils',
  }, {
    name: '奶茶',
    date: '2020-08-23',
    category: '餐飲食品',
    amount: '20',
    description: '太甜',
    icon: 'fas fa-utensils',
  }, {
    name: '公車',
    date: '2020-08-25',
    category: '交通出行',
    amount: '18',
    description: '',
    icon: 'fas fa-shuttle-van',
  }, {
    name: '電影',
    date: '2020-08-28',
    category: '休閒娛樂',
    amount: '380',
    description: '天能',
    icon: 'fas fa-grin-beam',
  }, {
    name: '電風扇',
    date: '2020-09-15',
    category: '家居物業',
    amount: '1200',
    description: 'Panasonic',
    icon: 'fas fa-home',
  }, {
    name: 'ALPHA camp',
    date: '2020-09-15',
    category: '其他',
    amount: '12000',
    description: '2-3',
    icon: 'fas fa-pen',
  })
  console.log('recordSeeder done')
})