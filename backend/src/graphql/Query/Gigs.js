const Gig = require('../../models/Gig')


const gigPrice = async (obj, {input}) => {
  console.log("hello")
  console.log(input)
    const p = await Gig.query().whereBetween("price", [input.low, input.high])
    // .andWhere("price", ">", `${input.low}`)
    return p
  }


const gigTopic = async (obj, {topic}) => {
    console.log("hello")
    console.log(topic)
    const t = await Gig.query().where("topic", `${topic}`)
    return t
  }


const gigTitle = async (obj, {title}) => {
    const i = await Gig.query().where("title", "like", `%${title}%`)
    return i

}


const resolver = {
  Query: {
    searchGigsPrice: gigPrice,
    searchGigsTopic: gigTopic,
    searchGigsInput: gigTitle
  },

  
  // Gig: {
  //   price,
  //   title,
  //   topic,
  // },
}

module.exports = resolver
