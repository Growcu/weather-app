import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/MoreInfo.scss';

const moreInfo = () => {
    const weatherData = useSelector((store) => store.cityData);
    const {
        city, time, temp, pressure, humidity, icon, feelsLike, tempMax, tempMin, speed,
    } = weatherData;
    return (
        <ul className="weatherDataListMore">
            <li className="city">{city}</li>
            <li className="time">{time}</li>
            <li className="temp">{`${temp}°C`}</li>
            <li className="pressure">{`${pressure}hPa`}</li>
            <li className="tempMax">{`${tempMax}°C`}</li>
            <li className="humidity">{`${humidity}%`}</li>
            <li className="tempMin">{`${tempMin}°C`}</li>
            <li className="speed">{`${speed}km/h`}</li>
            <li className="feelsLike">{`${feelsLike}°C`}</li>
            <li className="icon"><img src={`./icons/${icon}.png`} alt="icon" /></li>
        </ul>
    );
};
export default moreInfo;
