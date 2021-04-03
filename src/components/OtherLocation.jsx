import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { search } from '../actions/appActions';

const CurrentLocation = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((store) => store.cityData);
    const [cityInput, setCityInput] = useState('');
    const handleChangeCity = (event) => setCityInput(event.target.value);
    const {
        city, time, temp, pressure, humidity,
    } = weatherData;

    const handleDownloadData = () => {
        const newCity = { city: cityInput };
        dispatch(search(newCity));
    };
    return (
        <div className="otherLocation">
            <input type="text" value={cityInput} onChange={handleChangeCity} placeholder="City..." />
            <button type="button" onClick={handleDownloadData}>Znajdz</button>
            <div className="weatherDataWrapper">
                <ul className="weatherDataList">
                    <li>{city}</li>
                    <li>{time}</li>
                    <li>{temp}</li>
                    <li>{pressure}</li>
                    <li>{humidity}</li>
                    <li>Ikona</li>
                </ul>
                <button type="button">More...</button>
            </div>
        </div>
    );
};
export default CurrentLocation;
