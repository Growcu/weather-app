import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/BasicsInfo.scss';

const basicsInfo = () => {
    const weatherData = useSelector((store) => store.cityData);
    const {
        city, time, temp, pressure, humidity, icon,
    } = weatherData;
    return (
        <ul className="weatherDataListBasics">
            <li className="city">{city}</li>
            <li className="time">{time}</li>
            <li className="temp">{`${temp}°C`}</li>
            <li className="pressure">{`${pressure}hPa`}</li>
            <li className="humidity">{`${humidity}%`}</li>
            <li className="icon"><img src={`./icons/${icon}.png`} alt="icon" /></li>
        </ul>
    );
};
export default basicsInfo;
