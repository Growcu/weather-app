import React from 'react';
import { useSelector } from 'react-redux';

const moreInfo = () => {
    const weatherData = useSelector((store) => store.cityData);
    const {
        city, time, temp, pressure, humidity, icon, feelsLike, tempMax, tempMin, speed,
    } = weatherData;
    return (
        <ul className="weatherDataList">
            <li>{city}</li>
            <li>{time}</li>
            <li>{temp}</li>
            <li>{pressure}</li>
            <li>{tempMax}</li>
            <li>{humidity}</li>
            <li>{tempMin}</li>
            <li>{speed}</li>
            <li>{feelsLike}</li>
            <li><img src={`./icons/${icon}.png`} alt="icon" /></li>
        </ul>
    );
};
export default moreInfo;
