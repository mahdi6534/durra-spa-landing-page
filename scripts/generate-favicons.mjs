import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = 'C:\\Users\\mahdi\\.gemini\\antigravity-ide\\brain\\a0231395-14fa-4cdc-9acc-9e461a4de074\\favicon_source_1793651969352.png';
const OUT = join(__dirname, '..', 'public');

mkdirSync(OUT, { recursive: true });

const sizes = [
  { name: 'favicon-16x16.png',   size: 16  },
  { name: 'favicon-32x32.png',   size: 32  },
  { name: 'apple-touch-icon.png',size: 180 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(SRC)
    .resize(size, size)
    .png()
    .toFile(join(OUT, name));
  console.log(`✓ ${name}`);
}

// Also copy 32x32 as favicon.ico fallback (browsers accept PNG as .ico)
await sharp(SRC).resize(32, 32).png().toFile(join(OUT, 'favicon.ico'));
console.log('✓ favicon.ico');
console.log('Done!');
