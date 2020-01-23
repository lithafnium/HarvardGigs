const Gig = require('../../models/Gig')


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
  // Gig: {
  //   price,
  //   title,
  //   topic
  // },
}

module.exports = resolver

