import axios from 'axios';

import { SEARCHCITY, SEARCHLOCATION } from '../actions/appActions';

const downloadDataMiddleware = () => (next) => async (action) => {
    if (action.type === SEARCHLOCATION) {
        const { latitude, longitude } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => {
                const {
                    temp,
                    pressure,
                    humidity,
                } = response.data.main;
                action.payload = {
                    city: response.data.name,
                    temp,
                    pressure,
                    humidity,
                };
            });
    } else if (action.type === SEARCHCITY) {
        const { city } = action.payload;
        await axios
            .post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
            .then((response) => {
                const {
                    temp,
                    pressure,
                    humidity,
                } = response.data.main;
                action.payload = {
                    city,
                    temp,
                    pressure,
                    humidity,
                };
            });
    }
    next(action);
};
export default downloadDataMiddleware;
