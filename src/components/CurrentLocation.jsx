/* eslint-disable no-useless-catch */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchLocation } from '../actions/appActions';

const CurrentLocation = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((store) => store.cityData);

    const {
        city, temp, pressure, humidity,
    } = weatherData;

    const getLocation = () => {
        if ('geolocation' in navigator) {
            try {
                navigator.geolocation.getCurrentPosition((position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    console.log('zapytanie');
                    dispatch(searchLocation(location));
                });
            } catch (err) {
                throw err;
            }
        } else {
            alert('Brak mozliwosci lokalizacji');
        }
    };

    useEffect(() => (
        getLocation()
    ), []);

    return (
        <div className="currentLocation">
            <div className="weatherDataWrapper">
                <ul className="weatherDataList">
                    <li>{city}</li>
                    <li>Time</li>
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
