const axios = require(`axios`);

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d8ed91fd59460180d4865356aa3d7aee`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}