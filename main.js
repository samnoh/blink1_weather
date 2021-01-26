const dotenv = require('dotenv');
const Blink1 = require('node-blink1');

dotenv.config();

const api = require('./api');
const RGB = require('./colors');

const blink1 = new Blink1();

// blink1.setRGB(...RGB.blue, () => {
//     console.log('hello');
// });

// blink1.off();

async function main() {
    const { uvi } = await api.getCurrentWeather();
}

main();
