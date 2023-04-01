import { loadFull } from 'tsparticles';
import { tsParticles } from 'tsparticles-engine';

const $ = require('jquery');

$(async function () {
    await loadFull(tsParticles);
    tsParticles.loadJSON("tsparticles", "./src/particles.json").then((container) => {
        console.log("callback - tsparticles config loaded");
    }).catch((error) => {
        console.error(error);
    });
});