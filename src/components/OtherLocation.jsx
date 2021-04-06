import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { search } from '../actions/appActions';
import BasicsInfo from './basicsInfo';
import MoreInfo from './moreInfo';

import '../styles/OtherLocation.scss';

const CurrentLocation = () => {
    const dispatch = useDispatch();
    const [cityInput, setCityInput] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeCity = (event) => setCityInput(event.target.value);
    const handleShowMore = () => setIsVisible(!isVisible);

    const handleDownloadData = () => {
        const newCity = { city: cityInput };
        dispatch(search(newCity));
    };
    return (
        <div className="otherLocation">
            <div className="find">
                <input type="text" value={cityInput} onChange={handleChangeCity} placeholder="City..." />
                <button type="button" onClick={handleDownloadData}>Znajdz</button>
            </div>
            <div className="weatherDataWrapper">
                {isVisible ? <MoreInfo /> : <BasicsInfo />}
                <button type="button" onClick={handleShowMore}>More...</button>
            </div>
        </div>
    );
};
export default CurrentLocation;
