import { SEARCH, REFRESH } from '../actions/appActions';

const stateObject = {
    city: '',
    temperature: '',
    pressure: '',
    humidity: '',
};

const appReducer = (state = stateObject, action) => {
    switch (action.type) {
    case SEARCH:
        return {
            city: action.payload.city,
            temperature: action.payload.temperature,
            pressure: action.payload.pressure,
            humidity: action.payload.humidity,
        };
    case REFRESH:
        return state;
    default:
        return state;
    }
};

export default appReducer;
