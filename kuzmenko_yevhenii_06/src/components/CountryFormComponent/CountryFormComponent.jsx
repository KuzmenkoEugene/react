import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import BasicButton from '../Button/Button'

export default function CountryFormComponent() {
    const [countriesList] = useState(useSelector(store => store.countries))
    const [translationsItem, setTranslationsItem] = useState([])

    const [countryItem, setCountryItem] = useState(countriesList[0].name.official)
    const [languageItem, setLanguageItem] = useState(Object.keys(countriesList[0].translations)[0])

    const onChangeCapital = (e) => {
        
        let capital = countriesList.filter((el) => el.capital[0] === e.target.value.split(' ').slice(1).join(' '))
        setTranslationsItem(Object.keys(capital[0].translations))
        setCountryItem(capital[0].name.official)
        setLanguageItem(Object.keys(capital[0].translations)[0])
    }

    useEffect(() => {
        setTranslationsItem(Object.keys(countriesList[0].translations))
    }, [countriesList])


    return (
        <div>
            <h3>Capital Form Component</h3>
            <form method="get">
                <p>
                    <label htmlFor="capital">Select capital:</label>
                    <select onChange={(e) => onChangeCapital(e)} id="capital" name="capital">
                        {
                            countriesList.map((el, index) => {
                                return <option key={index} defaultValue={el.capital[0]}>{el.flag} {el.capital[0]}</option>
                            })
                        }
                    </select>
                </p>
                <p>
                    <label htmlFor="translation">Select Translation:</label>
                    <select onChange={(e) => { setLanguageItem(e.target.value) }} id="translation" name="translation">
                        {
                            translationsItem.map((el, index) => {
                                return <option key={index}>{`${el}`}</option>
                            })
                        }
                    </select>
                </p>
                <p>
                    <Link to={`/countries/${countryItem}?translation=${languageItem}`}>
                        <BasicButton title={`Read more about ${countryItem}`} />
                    </Link>
                </p>
            </form>
        </div>
    )
}
