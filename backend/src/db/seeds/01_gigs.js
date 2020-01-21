const gigsData = require('../../../data/gigs')

exports.seed = knex => knex('gigs').del()
  .then(() => knex('gigs').insert(gigsData))