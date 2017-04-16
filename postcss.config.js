const config = require('./src/config');

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          preserve: true,
          variables: config.variables
        }
      }
    })
  ]
};
