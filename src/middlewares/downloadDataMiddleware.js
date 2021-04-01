import axios from 'axios';

const downloadDataMiddleware = () => (next) => async (action) => {
    await axios
        .post(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload.city}&units=metric&appid=971d414e89f3c0b3df147fbb3ad30cb7`)
        .then((response) => {
            const {
                temp,
                pressure,
                humidity,
            } = response.data.main;
            action.payload = {
                city: action.payload.city,
                temp,
                pressure,
                humidity,
            };
        });
    next(action);
};
export default downloadDataMiddleware;
