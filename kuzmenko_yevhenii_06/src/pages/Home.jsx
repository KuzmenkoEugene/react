import React from 'react'

import HomeComponent from '../components/HomeComponent/HomeComponent'
import Navigation from '../components/Navigation/Navigation'
import CountryFormComponent from '../components/CountryFormComponent/CountryFormComponent'
import { useSelector } from 'react-redux'

export default function Home() {
  const countriesList = useSelector(store => store.countries)

  return (
    <>
        <Navigation/>
        <HomeComponent/>
        {
          countriesList.length ? <CountryFormComponent/> : null
        }
    </>
  )
}
