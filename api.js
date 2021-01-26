const axios = require('axios');

const lat = '-36.8509';
const lon = '174.7645';
const appid = process.env.API_KEY;
const APIOneCall = `https://api.openweathermap.org/data/2.5/onecall`; // OpenWeather OneCallAPI
const parts = ['current', 'minutely', 'hourly', 'daily', 'alerts'];

function _getExcludePartsByType(type) {
    return type ? parts.filter((part) => part !== type) : '';
}

async function _getWeatherAPIData(type) {
    try {
        const exclude = _getExcludePartsByType(type);
        const response = await axios.get(APIOneCall, {
            params: {
                lat,
                lon,
                appid,
                exclude,
            },
        });

        return type ? response.data[type] : response.data;
    } catch (error) {
        console.error(`Type: ${type}\n${error}`);
    }
}

function getAllWeather() {
    return _getWeatherAPIData();
}

function getCurrentWeather() {
    return _getWeatherAPIData(parts[0]);
}

function getMinutelyWeather() {
    return _getWeatherAPIData(parts[1]);
}

function getHourlyWeather() {
    return _getWeatherAPIData(parts[2]);
}

function getDailyWeather() {
    return _getWeatherAPIData(parts[3]);
}

function getWeatherAlerts() {
    return _getWeatherAPIData(parts[4]);
}

module.exports = {
    getAllWeather,
    getCurrentWeather,
    getMinutelyWeather,
    getHourlyWeather,
    getDailyWeather,
    getWeatherAlerts,
};
