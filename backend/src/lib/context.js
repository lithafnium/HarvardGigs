const { decodeToken } = require('../lib/auth')
const User = require('../models/User')

// The method exported here sets the context for all resolvers and refreshes tokens
module.exports = async ({ req, res }) => {
  //console.log("gets into fxn")
  // If login or register, skip auth requirements
  if (req.body.operationName === 'login' || req.body.operationName === 'register') {
    return ({
      req, res,
    })
  }
  //console.log("didn't skip auth req")
  
  if (!req.headers.authorization) {
    // No JWT present for auth
    return ({
      req,
      res,
    })
  }

  //console.log("header present")

  try {
    const {
      id,
    } = decodeToken(req.headers.authorization)
    const user = await User.query().findById(id)
    //console.log(id)
    return ({
      req,
      res,
      user,
    })
    // If failed context creation, make unathenticated request
  } catch (error) {
    //console.log(error)
    return ({
      req, res,
    })
  }
}
