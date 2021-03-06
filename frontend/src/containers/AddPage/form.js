import React, { useState } from 'react'
import { useLazyQuery, useMutation} from '@apollo/react-hooks'
//import { Container } from '../Dashboard/styles'
import Upload from './upload'
import { InnerDiv, Button, Input, Container, FormDiv, UploadDiv, OuterDiv } from './styles'
import ADD_GIG from './graphql'

const Form = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [descrip, setDescrip] = useState('')
  const [addGig, { loading, error, data }] = useMutation(ADD_GIG, {
    variables: { // this needs to be done!!!!!
      input: {
        title,
        photo: 'https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg',
        price,
        userId: '4608c154-e9cc-492b-a822-8dfece620a38',
        topic: 'Entertainment',
      },
    },
  })
  if(error) console.log(error); 
  return (
      <OuterDiv>
        <h1 style = {{textAlign: "left"}}>Add Gig</h1>
      <InnerDiv right={false}>
        

        <UploadDiv>
        <Upload />
        <Button type="button" onClick = {addGig}>Add</Button>
        </UploadDiv>
        <FormDiv>
      
        <FormInput label="Title" value={title} setValue={setTitle} />
        <FormInput label="Description" value={descrip} setValue={setDescrip} />

        <Input type="number" min="0.00" max="1000.00" step="1" placeholder="Price" onChange={e => setPrice(e.target.valueAsNumber )} />
        <select style = {{width: "100%", 
                          fontSize: "1.2rem", 
                          borderRadius: "2px"}} multiple>
          <option value="Tech">Tech</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Beauty">Beauty</option>
          <option value="Music">Music</option>
          <option value="Social">Social</option>
          <option value="Academic">Academic</option>
        </select>
        </FormDiv>
      </InnerDiv>
      </OuterDiv>
  )
}

export default Form

// export const NumInput = ({label, value, setValue}) => (
//   <Input placeholder = {label} value = {value} onChange = {e =>setValue(e.target.value.parseInt())}></Input>
// )

export const FormInput = ({ label, value, setValue }) => (
  <Input placeholder={label} value={value} onChange={e => setValue(e.target.value)} />

)
