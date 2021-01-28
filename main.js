const dotenv = require('dotenv');
const Blink1 = require('node-blink1');

dotenv.config();

const api = require('./api');
const RGB = require('./colors');

const myBlink = new Blink1();

async function main() {
    const weatherData = await api.getCurrentWeather();

    if (!weatherData.uvi) {
        return myBlink.setRGB(...RGB.green);
    }

    console.log(weatherData.uvi);

    switch (parseInt(weatherData.uvi)) {
        case 0:
        case 1:
        case 2:
            return myBlink.off(); // low
        case 3:
        case 4:
        case 5:
            return myBlink.setRGB(...RGB.yellow); // moderate
        case 6:
        case 7:
            return myBlink.setRGB(...RGB.orange); // high
        case 8:
        case 9:
        case 10:
            return myBlink.setRGB(...RGB.red); // very high
        default:
            return myBlink.setRGB(...RGB.purple); // 11+ extreme
    }
}

main();
