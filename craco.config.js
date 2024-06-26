const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '#ui': path.resolve(__dirname, 'src', 'ui'),
            '#features': path.resolve(__dirname, 'src', 'features'),
        },
    },
}
