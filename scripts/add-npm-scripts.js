const fs = require('fs')
const pkgPath = './package.json'
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
pkg.scripts = pkg.scripts || {}
pkg.scripts['images:convert'] = 'node scripts/convert-images.js'
pkg.scripts['public:convert'] = 'npm run images:convert'
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
console.log('Added scripts: images:convert, public:convert')