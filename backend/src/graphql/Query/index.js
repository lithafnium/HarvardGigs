const merge = require('lodash.merge')
const User = require('./User')
const Gigs = require('./Gigs')

const resolvers = [User, Gigs]

module.exports = merge(...resolvers)
