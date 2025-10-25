# create scripts folder if missing
if (-not (Test-Path -Path .\scripts)) { New-Item -ItemType Directory -Path .\scripts | Out-Null }

# write convert-images.js
$convert = @'
const sharp = require('sharp')
const glob = require('glob')
const path = require('path')
const fs = require('fs')

const SRC_DIR = path.join(__dirname, '..', 'public', 'images') // create public/images
const outFormats = [
  { ext: '.avif', fn: (img) => img.avif({ quality: 50 }) },
  { ext: '.webp', fn: (img) => img.webp({ quality: 70 }) }
]

if (!fs.existsSync(SRC_DIR)) {
  console.error('No images folder found at', SRC_DIR)
  process.exit(1)
}

glob(`${SRC_DIR}/**/*.{png,jpg,jpeg}`, async (err, files) => {
  if (err) throw err
  console.log(`Found ${files.length} image(s)`)
  for (const file of files) {
    const rel = path.relative(SRC_DIR, file)
    const base = path.join(SRC_DIR, rel).replace(/\.(png|jpe?g)$/i, '')
    try {
      const img = sharp(file).rotate()
      for (const f of outFormats) {
        const out = `${base}${f.ext}`
        await f.fn(img).toFile(out)
        console.log('wrote', out)
      }
    } catch (e) {
      console.error('Error processing', file, e)
    }
  }
  console.log('Done.')
})
'@

Set-Content -Path .\scripts\convert-images.js -Value $convert -Encoding UTF8

# write vercel.json at project root
$vercel = @'
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build" }
  ],
  "routes": [
    { "src": "/(.*\\.(?:avif|webp|png|jpg|jpeg|svg|ico))$", "headers": { "cache-control": "public, max-age=31536000, immutable" } },
    { "src": "/(.*\\.(?:css|js))$", "headers": { "cache-control": "public, max-age=31536000, immutable" } },
    { "src": "/(.*)$", "headers": { "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" } }
  ]
}
'@

Set-Content -Path .\vercel.json -Value $vercel -Encoding UTF8
