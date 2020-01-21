const BaseModel = require('./BaseModel')
 
class Gig extends BaseModel {
 static get tableName() {
   return 'gigs'
 }
 
 static get relationMappings() {
   const User = require('./User')
  
   return {
     users: {
       relation: HasManyRelation,
       modelClass: User,
       join: {
         from: 'gigs.userId',
         to: 'users.id'
       }
     }
   }
 }
}
 
module.exports = Gig