// Import Objection Models Here!
const User = require('../../models/User.js')
const Gig = require('../../models/Gig.js')


// 'GraphQL Exercises!'
// const allUsers = async () => {
//     const users = await User.query()
//     return users
// }

const user = async (obj, {id}) => {
    const b = await User.query().findById(id)
    return b
}

// const author = async ({authorId}) => {
//     const a = await Author.query().findById(authorId)
//     return a
// }

// const address = async ({addressId}) => {
//     const ad = await Address.query().findById(addressId)
//     return ad
// }


// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { 
    //   users: allUsers,
      searchUser: user, //left hand is the function in typeDefs and right hand is the const function in this file
   },
//    User: {
//         email,
//         firstName,
//         lastName,
//     }

}

module.exports = resolver
