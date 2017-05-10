const config = require('./src/config');

module.exports = {
  plugins: [
    require('stylelint'),

    require('postcss-browser-reporter')(),

    // require('postcss-initial')(),

    require('postcss-autoreset')({
      reset: {
        all: 'initial',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }
    }),

    require('postcss-custom-properties')({
      preserve: true,
      variables: config.variables,
      appendVariables: true
    }),

    require('postcss-nested')(),

    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions']
    })
  ]
};
