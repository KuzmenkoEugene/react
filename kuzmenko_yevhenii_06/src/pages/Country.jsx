import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { useSelector } from 'react-redux'
import { useParams, Link } from "react-router-dom";
import BasicButton from '../components/Button/Button';

export default function Country() {

  const { country } = useParams();

  let countriesList = useSelector(store => store.countries)

  const selectedCountry = countriesList.find(el => el.name.official === country);

  const renderNestedList = (country) => {
    if (typeof country === 'object' && !Array.isArray(country)) {
      return (
        <ul>
          {Object.entries(country).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong>
              {renderNestedList(value)}
            </li>
          ))}
        </ul>
      );
    } else if (Array.isArray(country)) {
      return (
        <ul>
          {country.map((item, index) => (
            <li key={index}>{renderNestedList(item)}</li>
          ))}
        </ul>
      );
    } else {
      return country;
    }
  }

  return (
    <>
      <Navigation />
      {selectedCountry ? (
        <div>
          <h2>{selectedCountry.name.official}</h2>
          {renderNestedList(selectedCountry)}
        </div>
      ) : (
        <p>no page</p>
      )}
      {
        <Link to="/countries">
          <BasicButton title={'Back to Countries'}/>
        </Link>
      }
    </>
  )
}
