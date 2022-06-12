import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CountrySelect from './CountrySelect'
import FormInput from './FormInput'
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
        <FormInput label='First Name' type='text' name='firstName' value={firstName} setValue={setFirstName} />
        <FormInput label='Last Name' type='text' name='lastName' value={lastName} setValue={setLastName} />
        <FormInput label='Middle Name' type='text' name='middleName' value={middleName} setValue={setMiddleName} />
        <FormInput label='Email' type='email' name='email' value={email} setValue={setEmail} />
        <FormInput label='Address' type='text' name='address' value={address} setValue={setAddress} />
        <CountrySelect country={country} setCountry={setCountry}
          state={state} setState={setState}
          setCountryCode={setCountryCode}  />
        <FormInput label='Zip Code' type='text' name='zipcode' value={zipcode} setValue={setZipCode} />
        <label htmlFor="phoneNumber">Phone Number</label>
        <PhoneInput
          country={countryCode}
          value={phonenumber}
          onChange={(phone) => setPhoneNumber(phone)}
          disableDropdown
        />
        <FormInput label='Height' type='number' name='height' value={height} setValue={setHeight} />
        <FormInput label='Weight' type='number' name='weight' value={weight} setValue={setWeight} />
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