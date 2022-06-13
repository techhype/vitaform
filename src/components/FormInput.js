import React from 'react'
import '../css/Form.css'

const FormInput = (props) => {
  const { type, name, value, setValue, label } = props
  return (
    <div className='inputContainer'>
      <label className='inputLabel' htmlFor={name}>{label}</label>
      <input
        className='textInput'
        type= {type}
        name= {name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required />
    </div>
  )
}

export default FormInput