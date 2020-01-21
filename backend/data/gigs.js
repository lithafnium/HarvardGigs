const casual = require('casual')
const userData = require('./user')
 
casual.define('gigs', ({ userId }) => ({
  id: casual.uuid,
  userId,
  title: casual.title,
  photo: casual.url,
  price: casual.integer(from = 0, to = 1000),
  createdAt: casual.moment,
}))

const gigsData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  gigsData.push(casual.gigs({ userId }))
}

module.exports = gigsData
