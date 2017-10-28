const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const mqpacker = require('css-mqpacker')

module.exports = {
  plugins: [
    atImport,
    cssnext({ browsers: ['last 2 versions'] }),
    mqpacker,
    cssnano({ autoprefixer: false })
  ],
}
