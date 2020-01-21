const Gig = require('../../models/Gig')

const createGit = async(obj, {input}) => {
    try{
        const newGig = await Gig.query().insertGraph(input); 
        return newGig; 
    } catch(err){
        throw new Error(`Could not create new Gig with input: ${JSON.stringify(input)}`)
    }
}

const resolver = {
    Mutation:{
        addGig,
    }
}

module.exports = resolver; 