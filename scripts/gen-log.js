const version = process.argv[2] || process.env.VERSION
const cc = require('conventional-changelog')
const file = `./RELEASE_LOG${version ? `_${version}` : ``}.md`
const fileStream = require('fs').createWriteStream(file)

cc({
  preset: 'angular',
  pkg: {
    transform (pkg) {
      console.log(pkg)
      pkg.version = `v${version}`
      return pkg
    }
  }
}).pipe(fileStream).on('close', () => {
  console.log(`Generated release note at ${file}`)
})