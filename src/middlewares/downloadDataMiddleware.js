/* eslint-disable camelcase */
import axios from 'axios';

import { SEARCHCITY, SEARCHLOCATION } from '../actions/appActions';
import timeReader from '../modules/timeReader';

const downloadDataMiddleware = () => (next) => async (action) => {
    const configuratePayload = (res) => {
        const {
            main, dt, timezone, name, weather, wind,
        } = res.data;
        const {
            temp, pressure, humidity, feels_like, temp_max, temp_min,
        } = main;
        const { speed } = wind.speed;
        const { icon } = weather[0];

        const time = timeReader(dt, timezone);

        action.payload = {
            city: name,
            feelsLike: feels_like,
            tempMax: temp_max,
            tempMin: temp_min,
            icon,
            time,
            temp,
            pressure,
            humidity,
            speed,
        };
    };
    if (action.type === SEARCHLOCATION) {
        const { latitude, longitude } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => configuratePayload(response));
    } else if (action.type === SEARCHCITY) {
        const { city } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => configuratePayload(response));
    }
    next(action);
};
export default downloadDataMiddleware;
