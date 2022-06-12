import React, { useState } from 'react'
import CountrySelect from './CountrySelect'

const Form = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [middleName, setMiddleName] = useState()
  const [address, setAddress] = useState()
  const [country, setCountry] = useState([])
  const [state, setState] = useState()
  const [zipcode, setZipCode] = useState()
  const [email, setEmail] = useState()
  const [phonenumber, setPhoneNumber] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="First Name">First Name</label>
      <input
        type='text'
        name='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required/>
      <label htmlFor="Last Name">Last Name</label>
      <input
        type='text'
        name='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required/>
      <label htmlFor="Middle Name">Middle Name</label>
      <input
        type='text'
        name='Middle Name'
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        required/>
      <label htmlFor="Email">Email</label>
      <input
        type='email'
        name='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      <label htmlFor="Address">Address</label>
      <input
        type='text'
        name='Address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required/>
      <CountrySelect country={country} setCountry={setCountry}/>
      <label htmlFor="State">State</label>
      <input
        type='text'
        name='State'
        value={state}
        onChange={(e) => setState(e.target.value)}
        required/>
      <label htmlFor="Zip Code">Zip Code</label>
      <input
        type='text'
        name='Zip Code'
        value={zipcode}
        onChange={(e) => setZipCode(e.target.value)}
        required/>
      <label htmlFor="Phone Number">Phone Number</label>
      <input
        type='text'
        name='Phone Number'
        value={phonenumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required/>
      <label htmlFor="Height">Height</label>
      <input
        type='text'
        name='Height'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required/>
      <label htmlFor="Weight">Weight</label>
      <input
        type='text'
        name='Weight'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required/>
      <input type='submit' value='Submit'/>
    </form>
  )
}

export default Form