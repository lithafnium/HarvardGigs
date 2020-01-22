const Gig = require('../../models/Gig')


const gigPrice = async (obj, {input}, {user}) => {
  console.log(user)
  console.log("hello")
  console.log(input)
    const p = await Gig.query().whereBetween("price", [input.low, input.high])
    // .andWhere("price", ">", `${input.low}`)
    return p
  }


const gigTopic = async (obj, { user }) => {
    console.log(user)
    const t = await Gig.query().findById(id)
    return t
  }


const gigInput = async () => {
    const i = await Gig.query().findById(id)
    return i

}




const resolver = {
  Query: {
    searchGigsPrice: gigPrice,
    searchGigsTopic: gigTopic,
    searchGigsInput: gigInput
  },

  
  // Gig: {
  //   price,
  //   title,
  //   topic,
  // },
}

module.exports = resolver

