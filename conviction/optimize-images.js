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

    // 3. Medium version
    await sharp(inputPath)
      .resize(1000)
      .webp({ quality: 70 })
      .toFile(`${outputDir}/${name}-md.webp`);

    // 4. Small thumbnail
    await sharp(inputPath)
      .resize(600)
      .webp({ quality: 65 })
      .toFile(`${outputDir}/${name}-sm.webp`);

    console.log(`Optimized: ${file}`);
  } catch (error) {
    // 5. Catch errors so one bad file doesn't crash the whole script
    console.error(`Error processing ${file}:`, error.message);
  }
}