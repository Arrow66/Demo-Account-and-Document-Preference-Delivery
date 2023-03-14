const rtl = require('@testing-library/react');
require.extensions['.svg'] = function(){ return null; }
require.extensions['.css'] = function(){ return null; }

require('babel-polyfill')
require('babel-register')

const customRender = (ui, options) =>
  rtl.render(ui, {
    myDefaultOption: 'something',
    ...options,
  })

module.exports = {
  ...rtl,
  render: customRender,
}