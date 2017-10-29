const gh = require('gh-pages')
const path = require('path')

gh.publish(path.join(__dirname, '_public'), (err) => {
  if (err) {
    console.log('\nError!', err)
  } else {
    console.log('\n🎉')
  }
})
