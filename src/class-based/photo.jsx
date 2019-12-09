import React from 'react'

export function Photo(props) {
  return (
    <div className="Photo">
      <img src={props.url} alt={props.alt} height="300" width="300" />
      <p className="caption">{props.description}</p>
    </div>
  )
}
