import React from 'react'

export const Button = ({event, children}) => {
  return (
    <button onClick={event}>{children}</button>
  )
}
