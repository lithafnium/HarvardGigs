const casual = require('casual')

// 'password' hashed with bcrypt scheme
// const password = '$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy'

casual.define('gigs', () => ({
  id: casual.uuid,
  userId: casual.uuid,
  title: casual.title,
  photo: casual.url,
  price: casual.integer(from = 0, to = 1000),
  created_at: casual.moment,
// password,
}))

const gigsData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.gigs)
}

module.exports = gigsData
