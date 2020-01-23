// Import Objection Models Here!
const User = require('../../models/User.js')
const Gig = require('../../models/Gig.js')


// 'GraphQL Exercises!'
// const allUsers = async () => {
//     const users = await User.query()
//     return users
// }
const viewer = async (obj, args, { user }) => {
    try{
        if (user) return user
    } catch(err){
        console.log(err); 
        throw new Error('Please Login')
    }
}





const user = async (obj, {id}, {user}) => {
    const b = await User.query().findById(id)
    return b
}

const username = async (obj, {name}) => {
    try {
        // console.log({name})
        const c = await User.query()
            .where("firstName", "like", `%${name}%`)
            .orWhere("lastName", "like", `%${name}%`)
        return c
    }
    catch (err)
    {
        console.log(err)
    }
    
}

const email = async (obj, {email}) => {
    try {
        console.log({email})
        const d = await User.query()
            .where("email", "like", `%${email}%`)
        return d
    }
    catch (err)
    {
        console.log(err)
    }
    
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
      searchUsername: username,
      searchEmail: email,
      viewer: viewer,
   },
//    User: {
//         email,
//         firstName,
//         lastName,
//     }

}

module.exports = resolver
