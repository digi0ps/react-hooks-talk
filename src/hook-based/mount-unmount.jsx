import React, { useEffect } from 'react'

export default function PhotoContainer() {
  const mouseHandler = () => null

  useEffect(() => {
    document.addEventListener('mousemove', mouseHandler)

    return () => {
      document.removeEventListener('mousemove', mouseHandler)
    }
  }, [])

  return <div className="App"></div>
}
