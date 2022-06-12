import React from 'react'

const FormInput = (props) => {
  const { type, name, value, setValue, label } = props
  return (
    <>

      <label htmlFor={name}>{label}</label>
      <input
        type= {type}
        name= {name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required />
    </>
  )
}

export default FormInput