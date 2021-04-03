import { SEARCHLOCATION, SEARCHCITY } from '../actions/appActions';

const stateObject = {
    city: '',
    time: '',
    temp: '',
    pressure: '',
    humidity: '',
    icon: '',
    feelsLike: '',
    tempMax: '',
    tempMin: '',
    speed: '',
};

export const appReducer = (state = stateObject, action) => {
    const { type, payload } = action;
    switch (type) {
    case SEARCHCITY: {
        const {
            city, time, temp, pressure, humidity, icon, feelsLike, tempMax, tempMin, speed,
        } = payload;
        return {
            city,
            time,
            temp,
            pressure,
            humidity,
            icon,
            feelsLike,
            tempMax,
            tempMin,
            speed,
        };
    }
    case SEARCHLOCATION: {
        const {
            city, time, temp, pressure, humidity, icon, feelsLike, tempMax, tempMin, speed,
        } = payload;
        return {
            city,
            time,
            temp,
            pressure,
            humidity,
            icon,
            feelsLike,
            tempMax,
            tempMin,
            speed,
        };
    }
    default:
        return state;
    }
};
