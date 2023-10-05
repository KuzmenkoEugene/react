import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCountryDelete } from '../../store/actions'
import { useNavigate } from 'react-router-dom';

export default function ButtonDelete({ title, nameCountry }) {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const deleteCountry = (nameCountry) => {
        dispatch(actionCountryDelete(nameCountry));
        navigation("/countries")
    }

    return (
        <button onClick={() => {deleteCountry(nameCountry)}}>{title}</button>
    )
}
