const casual = require('casual')
const userData = require('./user')

 
casual.define('gigs', ({ userId }) => ({
  id: casual.uuid,
  userId,
  title: casual.title,
  photo: casual.url,
  topic: casual.random_element(['Furniture',
  'Tech', 'Entertainment', 'Clothing',
  'Beauty', 'Music', 'Social', 'Academic']),
  price: casual.integer(from = 0, to = 1000),
  createdAt: casual.moment,
}))

const gigsData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  // const topic = 
  gigsData.push(casual.gigs({ userId }))
  
}

module.exports = gigsData
