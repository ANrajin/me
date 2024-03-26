const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        particles: './src/js/app.particles.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
