import React from 'react'

const Button = ({texto, estilo, onClick}) => {
  return (
    <button className={estilo} onClick={onClick}>{texto}</button>
  )
}

export default Button