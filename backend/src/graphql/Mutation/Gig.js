const Gig = require('../../models/Gig')
var API_KEY = '60f0bf4b928474772ec9ac66b4742bf7-9dfbeecd-7dbeccbb';
var DOMAIN = 'sandbox5e6d6e93c8c24da281a889dd91a20c30.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

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
    const deleteGig = await Gig.query().delete().where('id', id)
    return deleteGig
  } catch (err) {
    console.log(err)
    //throw new Error(`Could not delete Gig with id: ${JSON.stringify(input)}`)
  }
}

const sendInterest = async(obj, {posterId}) => {
    console.log("INSIDE SEND INEREST")
    console.log("POSTERID", posterId)
    try{
        
        const data = {
            from: 'steveli@college.harvard.edu',
            to: 'schwartzray8@gmail.com',
            subject: 'Hello',
            text: 'Testing some Mailgun awesomeness!',
          };

        mailgun.messages().send(data, (error, body) => {
            console.log("ERROR", error)
            console.log("HELLO")
            // console.log("BODY", body);
          });
        const interest = await Gig.query().delete().where("id", `${posterId}`);
        return interest;
    } catch(err){
        throw new Error(`Could not delete Gig with id: ${JSON.stringify(input)}`)
    }
}
 

const resolver = {
    Mutation:{
        addGig,
        deleteGig,
        sendInterest,
    }
}

module.exports = resolver