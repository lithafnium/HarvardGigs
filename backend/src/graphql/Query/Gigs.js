const Gig = require('../../models/Gig')
const User = require('../../models/User')


const gigPrice = async (obj, {input}, {user}) => {
  console.log(user)
  console.log("hello")
  console.log(input)
    const p = await Gig.query().whereBetween("price", [input.low, input.high])
    // .andWhere("price", ">", `${input.low}`)
    return p
  }




const gigTopic = async (obj, {topic}) => {
    const t = await Gig.query().where("topic", `${topic}`)
    return t
  }


const gigTitle = async (obj, {title}) => {
    const i = await Gig.query().where("title", "like", `%${title}%`)
    return i

}

const user = async ({ userId }) => {
  console.log(userId); 
  try {
    const user = await User.query().findById(userId)

    return user
  } catch (err) {
    console.log(err); 
    throw new Error('Failed to fetch user')
  }
}

const getGigs = async () => {
  try {
    const gigs = await Gig.query()

    return gigs
  } catch (err) {
    console.log(err); 
    throw new Error('Failed to fetch Gigs')
  }
}




const resolver = {
  Query: {
    searchGigsPrice: gigPrice,
    searchGigsTopic: gigTopic,
    searchGigsTitle: gigTitle,
    getGigs,
  },
  Gig: {
    user
  },
}

module.exports = resolver

