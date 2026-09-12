import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, extname } from "path";

const SRC = join(process.cwd(), "public", "images");
const OUT = join(process.cwd(), "public", "images", "optimized");
const WIDTHS = [400, 800, 1200];
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 85;

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function processImage(file) {
  const name = extname(file) ? file.slice(0, -extname(file).length) : file;
  const input = join(SRC, file);
  const meta = await sharp(input).metadata();
  const origWidth = meta.width || 1200;

  for (const w of WIDTHS) {
    if (w > origWidth) continue;
    const resized = sharp(input).resize({ width: w, withoutEnlargement: true });

    // WebP
    await resized
      .webp({ quality: WEBP_QUALITY })
      .toFile(join(OUT, `${name}-${w}w.webp`));

    // JPEG fallback
    await resized
      .jpeg({ quality: JPEG_QUALITY, progressive: true })
      .toFile(join(OUT, `${name}-${w}w.jpg`));
  }

  // Also generate a full-size WebP + JPEG for OG / large displays
  await sharp(input)
    .webp({ quality: WEBP_QUALITY })
    .toFile(join(OUT, `${name}.webp`));

  await sharp(input)
    .jpeg({ quality: JPEG_QUALITY, progressive: true })
    .toFile(join(OUT, `${name}.jpg`));
}

async function main() {
  await ensureDir(OUT);
  const files = (await readdir(SRC)).filter((f) =>
    /\.(jpe?g|png|webp)$/i.test(f)
  );

  console.log(`Processing ${files.length} images...`);
  for (const file of files) {
    console.log(`  → ${file}`);
    await processImage(file);
  }
  console.log(`Done. Output: ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
