import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src-images";
const outputDir = "./public/images";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

// Use a for...of loop instead of forEach for async operations
for (const file of files) {
  // 1. Filter out hidden files (like .DS_Store) and non-image files
  if (file.startsWith('.') || !file.match(/\.(png|jpe?g|webp|avif|gif|tiff)$/i)) {
    console.log(`Skipping unsupported or hidden file: ${file}`);
    continue;
  }

  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

  try {
    // 2. Large optimized version
    await sharp(inputPath)
      .resize(1600)
      .webp({ quality: 75 })
      .toFile(`${outputDir}/${name}.webp`);
    await sharp(inputPath)
      .resize(1600)
      .avif({ quality: 56, effort: 6 })
      .toFile(`${outputDir}/${name}.avif`);

    // 3. Medium version
    await sharp(inputPath)
      .resize(1000)
      .webp({ quality: 70 })
      .toFile(`${outputDir}/${name}-md.webp`);
    await sharp(inputPath)
      .resize(1000)
      .avif({ quality: 52, effort: 6 })
      .toFile(`${outputDir}/${name}-md.avif`);

    // 4. Small thumbnail
    await sharp(inputPath)
      .resize(600)
      .webp({ quality: 65 })
      .toFile(`${outputDir}/${name}-sm.webp`);
    await sharp(inputPath)
      .resize(600)
      .avif({ quality: 48, effort: 6 })
      .toFile(`${outputDir}/${name}-sm.avif`);

    console.log(`Optimized: ${file}`);
  } catch (error) {
    // 5. Catch errors so one bad file doesn't crash the whole script
    console.error(`Error processing ${file}:`, error.message);
  }
}
