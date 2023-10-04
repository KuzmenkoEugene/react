import React from 'react'

import HomeComponent from '../components/HomeComponent/HomeComponent'
import Navigation from '../components/Navigation/Navigation'
import CountryFormComponent from '../components/CountryFormComponent/CountryFormComponent'

export default function Home() {
  return (
    <>
        <Navigation/>
        <HomeComponent/>
        <CountryFormComponent/>
    </>
  )
}
