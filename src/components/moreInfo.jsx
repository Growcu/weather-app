import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/MoreInfo.scss';

const moreInfo = () => {
    const weatherData = useSelector((store) => store.cityData);
    const {
        city, time, pressure, humidity, icon,
    } = weatherData;

    const temp = Math.floor(weatherData.temp);
    const tempMax = Math.floor(weatherData.tempMax);
    const tempMin = Math.floor(weatherData.tempMin);
    const feelsLike = Math.floor(weatherData.feelsLike);
    const speed = Math.floor(weatherData.speed);

    if (city.length) {
        return (
            <ul className="weatherDataListMore">
                <li className="city">{city}</li>
                <li className="time">{time}</li>
                <li className="temp">{`${temp}°C`}</li>
                <li className="pressure">{`${pressure}hPa`}</li>
                <li className="tempMax">{`Max: ${tempMax}°C`}</li>
                <li className="humidity">{`${humidity}%`}</li>
                <li className="tempMin">{`Min: ${tempMin}°C`}</li>
                <li className="speed">{`Wind: ${speed}km/h`}</li>
                <li className="feelsLike">{`Feels: ${feelsLike}°C`}</li>
                <li className="icon"><img src={`./icons/${icon}.png`} alt="icon" /></li>
            </ul>
        );
    }
    return <h2>Write city name</h2>;
};
export default moreInfo;
