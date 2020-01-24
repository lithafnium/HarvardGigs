import gql from 'graphql-tag'

export const DELETE = gql`
    mutation delete($id: ID!){
        deleteGig(id: $id)
}

`

export const GET_VIEW_GIGS = gql`
    query {
            viewerGigs {
                id
                userId
                title
                photo
                price
                createdAt
            }
        }

`
