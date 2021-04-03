import { SEARCHLOCATION, SEARCHCITY } from '../actions/appActions';

const stateObject = {
    city: '',
    time: '',
    temp: '',
    pressure: '',
    humidity: '',
};

export const appReducer = (state = stateObject, action) => {
    switch (action.type) {
    case SEARCHCITY:
        return {
            city: action.payload.city,
            time: action.payload.time,
            temp: action.payload.temp,
            pressure: action.payload.pressure,
            humidity: action.payload.humidity,
            icon: action.payload.icon,
        };
    case SEARCHLOCATION:
        return {
            city: action.payload.city,
            time: action.payload.time,
            temp: action.payload.temp,
            pressure: action.payload.pressure,
            humidity: action.payload.humidity,
            icon: action.payload.icon,
        };
    default:
        return state;
    }
};
