import React from 'react'

export const Button = (props) => {
  return (
    <button className="btn btn-outline-success" onClick={props.onClick}>
        {props.value}
    </button>
  )
}
