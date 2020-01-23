/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import ImageUploader from 'react-images-upload'
import { UploadDiv } from './styles'

const Upload = () => {
  const [pictures, setPictures] = useState([])

  return (
    <UploadDiv>
      <ImageUploader
        withIcon
        buttonText="Choose images"
        onChange={e => {
          setPictures(e)
        }}
        value={pictures}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
    </UploadDiv>

  )
}
export default Upload
