import React from 'react'
import Photo from '../class-based/photo'
import { usePhotos } from './custom-hook'

export default function PhotoContainer() {
  const [photos, isLoading] = usePhotos()

  return (
    <div className="App">
      {isLoading
        ? 'Photos are loading'
        : photos.map(photo => <Photo {...photo} />)}
    </div>
  )
}
