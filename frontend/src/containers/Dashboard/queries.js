import gql from 'graphql-tag'

export const GET_GIGS = gql`
 	query getGigs{
        getGigs{
            id
            userId
            user{
                firstName
                lastName
            }
            title
            photo
            price
            createdAt   
        }
    }
`
export const GET_NAME = gql`
    query getName($id: ID!){
            searchUser(id: $id) {
                firstName
                lastName
            }
        }

`
