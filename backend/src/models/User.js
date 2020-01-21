const BaseModel = require('./BaseModel')
 
class User extends BaseModel {
 static get tableName() {
   return 'users'
 }
 
 static get relationMappings() {
   const Gig = require('./Gig')
  
   return {
     gig: {
       relation: this.BelongsToOneRelation,
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
