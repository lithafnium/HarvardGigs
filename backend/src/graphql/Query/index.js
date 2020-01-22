const merge = require('lodash.merge')
const User = require('./User')
const Gig = require('./Gigs')

const resolvers = [User, Gig]

module.exports = merge(...resolvers)
