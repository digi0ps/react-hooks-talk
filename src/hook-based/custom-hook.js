import { useState, useEffect } from 'react'
import * as api from './api'

export function usePhotos() {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.fetchPhotos().then(photos => {
      setPhotos(photos)
      setIsLoading(false)
    })
  }, [])

  const addNewPhoto = newPhoto => {
    setPhotos([...photos, newPhoto])
  }

  return [photos, isLoading, addNewPhoto]
}
