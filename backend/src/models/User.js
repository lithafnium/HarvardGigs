const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')
 
class User extends BaseModel {
 static get tableName() {
   return 'users'
 }
 
 static get relationMappings() {
   const Gig = require('./Gig')
  
   return {
     gig: {
       relation: BelongsToOneRelation,
       modelClass: Gig,
       join: {
         from: 'users.id',
         to: 'gigs.userId'
       }
     }
   }
 }
}
 
module.exports = User
