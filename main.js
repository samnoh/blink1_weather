const Blink1 = require('node-blink1');

const RGB = require('./colors');

const blink1 = new Blink1();

blink1.setRGB(...RGB.red, () => {
    console.log('hello');
});
