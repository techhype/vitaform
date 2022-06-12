import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountrySelect = ({ country, setCountry }) => {

  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])

  useEffect(() => {
    fetchCountryData()
    console.log(countries,country)
  },[])

  useEffect(() => {
    if(country==='United States')
      fetchStateData()
  },[country])

  const fetchCountryData = async () => {
    axios.get('https://countriesnow.space/api/v0.1/countries')
      .then((getResponse) => {
        getResponse.data.data.forEach((x) => {setCountries(countries => [...countries, x.country])})
      })
      .catch((error) => {
        console.log('Error while fetching countries API',error)
      })
  }

  const fetchStateData = () => {
    const body = JSON.stringify({ country: country })
    var options = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    axios.post('https://countriesnow.space/api/v0.1/countries/states', body, options)
      .then((getResponse) => {
        console.log(getResponse.data)
        getResponse.data.data.states.forEach((x) => {setStates(states => [...states, x.name])})
      })
      .catch((error) => {
        console.log('Error while fetching states API',error)
      })
  }

  return (
    <>
      <label htmlFor="Country">Country</label>
      <select
        onChange = {(e) => setCountry(e.target.value)}
        //value={country}
        required>
        <option defaultValue value=''>  select an option  </option>
        {countries.map((allCountries, key) => {
          return <option key={key} value={allCountries}>{allCountries}</option>
        })}
      </select>
      <label htmlFor="State">State</label>
      {
        country === 'United States' ?
          (
            <select
            //onChange = {(e) => setState(e.target.value)}
            //value={state}
              required>
              <option defaultValue value=''>  select an option  </option>
              {states.map((allStates, key) => {
                return <option key={key} value={allStates}>{allStates}</option>
              })
              }
            </select>
          ) :
          (
            <input
              type='text'
              name='State'
              //value={state}
              //onChange={(e) => setState(e.target.value)}
              required/>
          )
      }
    </>
  )
}

export default CountrySelect