import { SEARCHLOCATION, SEARCHCITY } from '../actions/appActions';

const stateObject = {
    city: '',
    temp: '',
    pressure: '',
    humidity: '',
};

export const appReducer = (state = stateObject, action) => {
    switch (action.type) {
    case SEARCHCITY:
        return {
            city: action.payload.city,
            temp: action.payload.temp,
            pressure: action.payload.pressure,
            humidity: action.payload.humidity,
        };
    case SEARCHLOCATION:
        return {
            city: action.payload.city,
            temp: action.payload.temp,
            pressure: action.payload.pressure,
            humidity: action.payload.humidity,
        };
    default:
        return state;
    }
};
