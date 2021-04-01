export const SEARCH = 'SEARCH';
export const REFRESH = 'REFRESH';

export const search = ({
    city, temp, pressure, humidity,
}) => ({
    type: SEARCH,
    payload: {
        city,
        temp,
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
