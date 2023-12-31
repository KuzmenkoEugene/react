import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ButtonDelete from '../ButtonDelete/ButtonDelete'

export default function CountriesListComponent() {

  let countriesList = useSelector(store => store.countries)

  return (
    <div>
      <h3>Countries List</h3>
      <ul>
        {countriesList.map((el, index) => (
          <li key={index}>
            <Link to={el.name.official}>{el.flag} {el.name.official}</Link> <ButtonDelete nameCountry={el.name.official} title={'Delete'} />
          </li>
        ))}
      </ul>
    </div>
  )
}








