const Gig = require('../../models/Gig')


const addGig = async (obj, { input }) => {
  try {
    const newGig = await Gig.query().insert(input)
    return newGig
  } catch (err) {
    console.log(err)
    throw new Error(`Could not create new Gig with input: ${JSON.stringify(input)}`)
  }
}

const deleteGig = async (obj, { id }) => {
  try {
    await Gig.query().delete().where('id', id)
    return id
  } catch (err) {
    console.log(err)
    //throw new Error(`Could not delete Gig with id: ${JSON.stringify(input)}`)
  }
}

const resolver = {
  Mutation: {
    addGig,
    deleteGig,
  },
}

module.exports = resolver
