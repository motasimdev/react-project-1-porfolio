import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={`bg-primaryClr uppercase rounded-[50px] ${className}`}>{btnTxt}</button>
  )
}

export default Button