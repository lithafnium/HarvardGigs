const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    searchGigsTopic(topic:String!):[Gig!]
    searchUser(id:ID!):User!
    searchUsername(name:String!):[User!]
    searchGigsInput(input: String!):[Gig!]
    searchGigsPrice(input: RangeInput!): [Gig!]
  }

  input RangeInput {
    high: Int!
    low: Int!
  }

  type Mutation {
    addGig(input: AddGigInput!): Gig!
    deleteGig(id:ID!): Gig!
    # createUser(input:CreateUserInput!):User!
    login(email:String!, password:String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
    createdAt: String!
    password: String!
  }

  type CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
  }

  type Gig {
    id: ID!
    userId: ID!
    title: String!
    photo: String!
    price: Int!
    topic: TaskStateEnum!
    createdAt: String!
  }

  enum TaskStateEnum {
    Furniture
    Tech
    Entertainment
    Clothing
    Beauty
    Music
    Social
    Academic
  }

  input AddGigInput {
    title: String!
    photo: String!
    price: Int!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }
`
