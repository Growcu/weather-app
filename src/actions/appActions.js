export const SEARCHCITY = 'SEARCHCITY';
export const SEARCHLOCATION = 'SEARCHLOCATION';

export const search = ({ city }) => ({
    type: SEARCHCITY,
    payload: {
        city,
    },
});

export const searchLocation = ({ latitude, longitude }) => ({
    type: SEARCHLOCATION,
    payload: {
        latitude,
        longitude,
    },
});
