import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/BasicsInfo.scss';

const basicsInfo = () => {
    const weatherData = useSelector((store) => store.cityData);
    const {
        city, time, pressure, humidity, icon,
    } = weatherData;

    const temp = Math.floor(weatherData.temp);

    if (city.length) {
        return (
            <ul className="weatherDataListBasics">
                <li className="city">{city}</li>
                <li className="time">{time}</li>
                <li className="temp">{`${temp}°C`}</li>
                <li className="pressure">{`Pressure: ${pressure}hPa`}</li>
                <li className="humidity">{`Humidity: ${humidity}%`}</li>
                <li className="icon"><img src={`./icons/${icon}.png`} alt="icon" /></li>
            </ul>
        );
    }
    return <p> </p>;
};
export default basicsInfo;
