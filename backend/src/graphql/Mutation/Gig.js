const Gig = require('../../models/Gig')



const addGig = async(obj, {input}) => {
    try{
        const newGig = await Gig.query().insertGraph(input); 
        return newGig; 
    } catch(err){
        throw new Error(`Could not create new Gig with input: ${JSON.stringify(input)}`)
    }
}

const deleteGig = async(obj, {input}) => {
    try{
        const deleteGig = await Gig.query().delete().where("id", `${input}`);
        return deleteGig; 
    } catch(err){
        throw new Error(`Could not delete Gig with id: ${JSON.stringify(input)}`)
    }
}

const resolver = {
    Mutation:{
        addGig,
        deleteGig,
    }
}

module.exports = resolver;  

