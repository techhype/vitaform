import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CountrySelect from './CountrySelect'
import FormInput from './FormInput'
import '../css/Form.css'
import '../css/card.css'

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
    <div className='formContainer'>
      <h2 className='form-title'>VitaForm</h2>
      <form id='form' onSubmit={handleSubmit}>
        <FormInput label='First Name' type='text' name='firstName' value={firstName} setValue={setFirstName} />
        <FormInput label='Last Name' type='text' name='lastName' value={lastName} setValue={setLastName} />
        <FormInput label='Middle Name' type='text' name='middleName' value={middleName} setValue={setMiddleName} />
        <FormInput label='Email' type='email' name='email' value={email} setValue={setEmail} />
        <FormInput label='Address' type='text' name='address' value={address} setValue={setAddress} />
        <CountrySelect country={country} setCountry={setCountry}
          state={state} setState={setState}
          setCountryCode={setCountryCode}  />
        <FormInput label='Zip Code' type='text' name='zipcode' value={zipcode} setValue={setZipCode} />
        <div className='inputContainer'>
          <label className='formLabel' htmlFor="phoneNumber">Phone Number</label>
          <PhoneInput
            country={countryCode}
            value={phonenumber}
            onChange={(phone) => setPhoneNumber(phone)}
          />
        </div>
        <FormInput label='Height (Ft/inches)' type='number' name='height' value={height} setValue={setHeight} />
        <FormInput label='Weight (kgs)' type='number' name='weight' value={weight} setValue={setWeight} />
        <input className='submitButton' type='submit' value='Submit' />
        {
          showDetails===1 &&
          <div className='c-card'>
            <div className='card-body'>
              <div className="card-title">Submitted Form Details</div>
              <>
                <div className="card-intro">Firt Name: {firstName}</div>
                <div className="card-intro">Last Name: {lastName}</div>
                <div className="card-intro">Middle Name: {middleName}</div>
                <div className="card-intro">Address: {address},{state},{zipcode},{country}</div>
                <div className="card-intro">Email: {email}</div>
                <div className="card-intro">Phone Number: {phonenumber}</div>
                <div className="card-intro">Height: {height}</div>
                <div className="card-intro">Weight: {weight}</div>
              </>
            </div>
          </div>
        }
      </form>
    </div>
  )
}

export default Form