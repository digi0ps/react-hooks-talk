import React, { useState, useEffect } from 'react'
import Photo from '../class-based/photo'
import * as api from '../helpers/api'

export default function PhotoContainer() {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const photos = await api.get_photos()

      setPhotos(photos)
      setIsLoading(false)
    }

    api.getPhotos().then(photos => {
      setPhotos(photos)
      setIsLoading(photos)
    })

    fetchData()
  }, [])

  return (
    <div className="App">
      {isLoading
        ? 'Photos are loading'
        : photos.map(photo => <Photo {...photo} />)}
    </div>
  )
}
