export const SEARCH = 'SEARCH';
export const REFRESH = 'REFRESH';

export const search = ({
    city, temperature, pressure, humidity,
}) => ({
    type: SEARCH,
    payload: {
        city,
        temperature,
        pressure,
        humidity,
    },
});

export const refresh = ({ city }) => ({
    type: REFRESH,
    payload: {
        city,
    },
});
