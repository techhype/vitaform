import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CountrySelect from './CountrySelect'
import '../css/Form.css'

const Form = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [middleName, setMiddleName] = useState()
  const [address, setAddress] = useState()
  const [country, setCountry] = useState()
  const [countryCode, setCountryCode] = useState()
  const [state, setState] = useState()
  const [zipcode, setZipCode] = useState()
  const [email, setEmail] = useState()
  const [phonenumber, setPhoneNumber] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()

  const [showDetails, setShowDetails] = useState(0)



  const handleSubmit = (e) => {
    e.preventDefault()
    setShowDetails(1)
    console.log('Form Submitted')
  }

  return (
    <>
      <h2>Vita Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required />
        <label htmlFor="lastName">Last Name</label>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required />
        <label htmlFor="middleName">Middle Name</label>
        <input
          type='text'
          name='middleName'
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          required />
        <label htmlFor="Email">Email</label>
        <input
          type='email'
          name='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <label htmlFor="address">Address</label>
        <input
          type='text'
          name='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required />
        <CountrySelect country={country} setCountry={setCountry}
          state={state} setState={setState}
          setCountryCode={setCountryCode}  />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type='text'
          name='zipCode'
          value={zipcode}
          onChange={(e) => setZipCode(e.target.value)}
          required />
        <label htmlFor="phoneNumber">Phone Number</label>
        <PhoneInput
          country={countryCode}
          value={phonenumber}
          onChange={(phone) => setPhoneNumber(phone)}
          disableDropdown
        />
        <label htmlFor="height">Height</label>
        <input
          type='text'
          name='height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required />
        <label htmlFor="weight">Weight</label>
        <input
          type='text'
          name='weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required />
        <input type='submit' value='Submit' />
        {
          showDetails===1 &&
          <div>
            Firt Name: {firstName}
            Last Name : {lastName}
            Middle Name : {middleName}
            Address : `{address},{state},{zipcode},{country}`
            Email : {email}
            Phone Number: {phonenumber}
            Height : {height}
            Weight: {weight}
          </div>
        }
      </form>
    </>
  )
}

export default Form