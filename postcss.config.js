const config = require('./src/config');
const stylelint = require('stylelint');
const postcssBrowserReporter = require('postcss-browser-reporter');
const postcssAutoreset = require('postcss-autoreset');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssNested = require('postcss-nested');
const postcssAutoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    stylelint(),

    postcssBrowserReporter(),

    // require('postcss-initial')(),

    postcssAutoreset({
      reset: {
        all: 'initial',
        display: 'block',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
    }),

    postcssCustomProperties({
      preserve: true,
      variables: config.variables,
      appendVariables: true,
    }),

    postcssNested(),

    postcssAutoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
    }),
  ],
};
