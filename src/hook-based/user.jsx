import React, { useState, useEffect } from 'react'

export default function PhotoContainer() {
  const initialUser = localStorage['app-user'] || 'Guest'
  const [user, setUser] = useState(initialUser)

  useEffect(() => {
    localStorage.setItem('app-user', user)
  }, [user])

  const editUsername = e => {
    e.preventDefault()
    const { value } = e.target
    setUser(value.trimStart())
  }

  return (
    <div className="App">
      <h1>Welcome, {user}</h1>

      <input type="text" value={user} onChange={editUsername} />
    </div>
  )
}
