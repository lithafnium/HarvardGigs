import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { Container } from '../Dashboard/styles'
import Upload from './upload'
import { InnerDiv, Button, Input } from './styles'
import ADD_GIG from './graphql'

const Form = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [descrip, setDescrip] = useState('')
  const [addGig, { loading, error, data }] = useLazyQuery(ADD_GIG, {
    variables: { // this needs to be done!!!!!
      input: {
        title,
        photo: 'https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg',
        price,
        userId: 'af17ddec-e297-45c5-9fa5-6b13e6c7898f',
        topic: 'Entertainment',
      },
    },
  })
  return (

    <Container>
      <InnerDiv right={false}>
        <Upload />
        <Button type="button">Add</Button>
      </InnerDiv>
      <InnerDiv right>
        <FormInput label="Title" value={title} setValue={setTitle} />
        <FormInput label="Description" value={descrip} setValue={setDescrip} />

        <Input type="number" min="0.00" max="1000.00" step="1" placeholder="Price" onChange={e => setPrice(e.target.value)} />
        <select multiple>
          <option value="Tech">Tech</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Beauty">Beauty</option>
          <option value="Music">Music</option>
          <option value="Social">Social</option>
          <option value="Academic">Academic</option>
        </select>
      </InnerDiv>
    </Container>
  )
}

export default Form

export const FormInput = ({ label, value, setValue }) => (
  <Input placeholder={label} value={value} onChange={e => setValue(e.target.value)} />

)
