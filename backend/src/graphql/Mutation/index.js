const merge = require('lodash.merge')
const Auth = require('./Auth')
const Gig = require('./Gig'); 

const resolvers = [Auth, Gig]

module.exports = merge(...resolvers)
