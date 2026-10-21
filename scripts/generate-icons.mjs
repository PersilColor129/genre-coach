/*
 * Generates the PWA app icons (rave smiley mask) as crisp pixel-art PNGs.
 * Colours are read from src/styles/tokens.css, so the icons follow the design tokens.
 * Run: npm run icons  →  writes public/icons/*.png
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

const root = new URL('..', import.meta.url)
const tokens = readFileSync(new URL('src/styles/tokens.css', root), 'utf8')

function token(name) {
  const match = tokens.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))
  if (!match) throw new Error(`Token --${name} not found in tokens.css`)
  const hex = match[1]
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
}

const colours = {
  '.': token('color-bg'),
  a: token('color-lime'), // face
  s: token('color-line'), // mask strap
}

// 12 × 10 cells; eyes and smile are holes in the face (background colour).
const smiley = [
  '....aaaa....',
  '..aaaaaaaa..',
  '.aaaaaaaaaa.',
  '.aa.aaaa.aa.',
  'saa.aaaa.aas',
  'saaaaaaaaaas',
  '.aa.aaaa.aa.',
  '.aaa....aaa.',
  '..aaaaaaaa..',
  '....aaaa....',
]

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

function crc32(buf) {
  let c = 0xffffffff
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

/** Opaque RGB PNG (no alpha – iOS fills transparent icon areas with black). */
function encodePng(size, pixelAt) {
  const raw = Buffer.alloc(size * (size * 3 + 1))
  for (let y = 0; y < size; y++) {
    const row = y * (size * 3 + 1)
    raw[row] = 0 // filter: none
    for (let x = 0; x < size; x++) raw.set(pixelAt(x, y), row + 1 + x * 3)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 2 // colour type: RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/** Draws the smiley centred, each cell `cell` px wide (integer → no blurry pixels). */
function icon(size, cell) {
  const w = smiley[0].length * cell
  const h = smiley.length * cell
  const left = Math.floor((size - w) / 2)
  const top = Math.floor((size - h) / 2)
  return encodePng(size, (x, y) => {
    const cx = Math.floor((x - left) / cell)
    const cy = Math.floor((y - top) / cell)
    const ch = smiley[cy]?.[cx] ?? '.'
    return colours[ch]
  })
}

const out = new URL('public/icons/', root)
mkdirSync(out, { recursive: true })

const files = {
  // Regular icons: smiley fills ~75 % of the width.
  'icon-192.png': icon(192, 12),
  'icon-512.png': icon(512, 32),
  // Maskable: Android crops to a circle/squircle – keep the smiley inside the 80 % safe zone.
  'icon-maskable-512.png': icon(512, 24),
  // iOS home screen; iOS rounds the corners itself.
  'apple-touch-icon.png': icon(180, 12),
}

for (const [name, png] of Object.entries(files)) {
  writeFileSync(new URL(name, out), png)
  console.log(`public/icons/${name}`)
}
