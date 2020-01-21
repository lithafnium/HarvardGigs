const postsData = require('../data/gigs')

exports.seed = knex => knex('gigs').del()
  .then(() => knex('gigs').insert(gigsData))