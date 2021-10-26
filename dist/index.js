
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-native-screen-layouts.cjs.production.min.js')
} else {
  module.exports = require('./react-native-screen-layouts.cjs.development.js')
}
