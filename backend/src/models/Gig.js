const BaseModel = require('./BaseModel')
const { BelongsToOneRelation, HasManyRelation } = require('objection')

 
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