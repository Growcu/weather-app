const timeReader = (time, timezone) => {
    const timeInMiliseconds = (time + timezone) * 1000;
    const currentTime = new Date(timeInMiliseconds);
    return `${currentTime.getUTCHours()}:${currentTime.getUTCMinutes()}`;
};
export default timeReader;
