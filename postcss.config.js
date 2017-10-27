const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const scss = require('postcss-scss')
const mqpacker = require('css-mqpacker')
const nested = require('postcss-nested')

module.exports = {
  plugins: [
    atImport,
    cssnext({ browsers: ['last 2 versions'] }),
    mqpacker,
    nested,
    cssnano({ autoprefixer: false })
  ],
  syntax: scss
}
