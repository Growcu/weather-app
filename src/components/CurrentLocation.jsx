/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { searchLocation } from '../actions/appActions';
import BasicsInfo from './basicsInfo';
import MoreInfo from './moreInfo';

import '../styles/CurrentLocation.scss';

const CurrentLocation = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isVisible, setIsVisible] = useState(false);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(searchLocation(location));
            }, () => {
                alert('Brak mozliwosci lokalizacji urzadzenia. Pracujemy nad tym');
                history.push('/otherLocation');
            });
        } else {
            alert('Brak mozliwosci lokalizacji');
        }
    };

    const handleShowMore = () => setIsVisible(!isVisible);

    useEffect(() => (
        getLocation()
    ), []);

    return (
        <div className="currentLocation">
            <div className="weatherDataWrapper">
                {isVisible ? <MoreInfo /> : <BasicsInfo />}
                <button type="button" onClick={handleShowMore}>More...</button>
            </div>
        </div>
    );
};
export default CurrentLocation;
