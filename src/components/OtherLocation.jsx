import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { search } from '../actions/appActions';

const CurrentLocation = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((store) => store.cityData);
    const [cityInput, setCityInput] = useState('');
    const handleChangeCity = (event) => setCityInput(event.target.value);
    const {
        city, temp, pressure, humidity,
    } = weatherData;

    const handleDownloadData = () => {
        const newCity = {
            city: cityInput,
            temp: '',
            pressure: '',
            humidity: '',
        };
        dispatch(search(newCity));
    };

    return (
        <div className="otherLocation">
            <h1>Inna lokalizacja</h1>
            <input type="text" value={cityInput} onChange={handleChangeCity} placeholder="City..." />
            <p>{city}</p>
            <p>{temp}</p>
            <p>{pressure}</p>
            <p>{humidity}</p>
            <button type="button" onClick={handleDownloadData}>Znajdz</button>
        </div>
    );
};
export default CurrentLocation;
