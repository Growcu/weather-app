const timeReader = (time, timezone) => {
    const timeInMiliseconds = (time + timezone) * 1000;
    const currentTime = new Date(timeInMiliseconds);

    const hours = currentTime.getUTCHours() <= 9 ? `0${currentTime.getUTCHours()}` : currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes() <= 9 ? `0${currentTime.getUTCMinutes()}` : currentTime.getUTCMinutes();

    return `${hours}:${minutes}`;
};
export default timeReader;
