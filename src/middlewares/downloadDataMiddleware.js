import axios from 'axios';

import { SEARCHCITY, SEARCHLOCATION } from '../actions/appActions';
import timeReader from '../modules/timeReader';

const downloadDataMiddleware = () => (next) => async (action) => {
    if (action.type === SEARCHLOCATION) {
        const { latitude, longitude } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => {
                const {
                    main, dt, timezone, name, weather,
                } = response.data;
                const {
                    temp,
                    pressure,
                    humidity,
                } = main;
                const timeInMiliseconds = (dt + timezone) * 1000;
                const currentTimeInCity = timeReader(timeInMiliseconds);
                action.payload = {
                    city: name,
                    time: currentTimeInCity,
                    temp,
                    pressure,
                    humidity,
                    icon: weather[0].icon,
                };
            });
    } else if (action.type === SEARCHCITY) {
        const { city } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => {
                const {
                    main, dt, timezone, weather,
                } = response.data;
                const {
                    temp,
                    pressure,
                    humidity,
                } = main;
                const timeInMiliseconds = (dt + timezone) * 1000;
                const currentTimeInCity = timeReader(timeInMiliseconds);
                action.payload = {
                    city,
                    time: currentTimeInCity,
                    temp,
                    pressure,
                    humidity,
                    icon: weather[0].icon,
                };
            });
    }
    next(action);
};
export default downloadDataMiddleware;
