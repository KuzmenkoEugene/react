import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'

import Countries from './Countries'
import Country from './Country'
import Home from './Home'

export default function Layout() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <main>

                    <Routes>
                        <Route index path={"/"} element={<Home />}></Route>
                        <Route path={"countries"} element={<Countries />}></Route>
                        <Route path={"countries/:country"} element={<Country />}></Route>
                        <Route path={"countries/:country"} element={<Country />}></Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </Provider>
    )
}
