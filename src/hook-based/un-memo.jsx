import React, { useState } from 'react'
import Photo from '../class-based/photo'
import { usePhotos } from './custom-hook'
import { filterPhotosByCaption } from '../helpers/utils'

export default function PhotoContainer() {
  const [text, setText] = useState('')
  const [photos, isLoading] = usePhotos()

  const handleChange = e => {
    e.preventDefault()

    const { value } = e.target

    setText(value)
  }

  const filteredPhotos = filterPhotosByCaption(photos, text)

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} />
      {isLoading
        ? 'Photos are loading'
        : filteredPhotos.map(photo => <Photo {...photo} />)}
    </div>
  )
}
