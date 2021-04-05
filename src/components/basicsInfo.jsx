import React from 'react';
import { useSelector } from 'react-redux';

const basicsInfo = () => {
    const weatherData = useSelector((store) => store.cityData);
    const {
        city, time, temp, pressure, humidity, icon,
    } = weatherData;
    return (
        <ul className="weatherDataList">
            <li>{city}</li>
            <li>{time}</li>
            <li>{`${temp}°C`}</li>
            <li>{`${pressure}hPa`}</li>
            <li>{`${humidity}%`}</li>
            <li><img src={`./icons/${icon}.png`} alt="icon" /></li>
        </ul>
    );
};
export default basicsInfo;
