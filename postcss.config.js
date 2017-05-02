const config = require('./src/config');

module.exports = {
  plugins: [
    require('postcss-import')(),

    require('stylelint'),

    require('postcss-browser-reporter')(),

    require('postcss-custom-properties')({
      warnings: false,
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
