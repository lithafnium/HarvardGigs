import gql from 'graphql-tag'

export const DELETE = gql`
    mutation delete($id: ID!){
        deleteGig(id: $id)
}

`