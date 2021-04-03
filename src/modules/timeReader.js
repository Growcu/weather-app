const timeReader = (timeFromCity) => {
    const time = new Date(timeFromCity);
    return `${time.getUTCHours()}:${time.getUTCMinutes()}`;
};
export default timeReader;
