const Gig = require('../../models/Gig')


const gigPrice = async () => {
    const p = await Gig.query().findById(id)
    return p
  }


const gigTopic = async () => {
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
    searchGigInput: gigInput
  },
  Gig: {
    price,
    title,
    topic,
  },
}

module.exports = resolver
