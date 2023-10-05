import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { useSelector } from 'react-redux'
import { useParams, Link, useLocation } from "react-router-dom";
import BasicButton from '../components/Button/Button';
import ButtonDelete from '../components/ButtonDelete/ButtonDelete';

export default function Country() {

  const { country } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const translationItem = searchParams.get('translation');

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
      <div>
        {selectedCountry ? (
          <div>
            <h2>{selectedCountry.translations[translationItem]?.official || null ? selectedCountry.translations[translationItem]?.official || null : selectedCountry.name.official}</h2>
            {renderNestedList(selectedCountry)}
            <p>
              <ButtonDelete nameCountry={selectedCountry.name.official} title={'Delete'} />
            </p>
          </div>
        ) : (
          <p>no page</p>
        )}
      </div>
      {
        <Link to="/countries">
          <BasicButton title={'Back to Countries'} />
        </Link>
      }
    </>
  )
}
