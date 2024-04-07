import React from 'react'

const CustomInput = (props) => {
    const{text,placeholder,name,classname}=props

  return (
    <div>
    <input
      type={text}
      name={name}
      placeholder={placeholder}
      className={`form-control ${classname}`}
    />
  </div>
  )
}

export default CustomInput