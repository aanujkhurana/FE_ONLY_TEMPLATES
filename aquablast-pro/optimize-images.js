import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/images";
const outputDir = "./public/web";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

  // 1. Large optimized version
  await sharp(inputPath)
    .resize(1600)
    .webp({ quality: 75 })
    .toFile(`${outputDir}/${name}.webp`);

  // 2. Medium version
  await sharp(inputPath)
    .resize(1000)
    .webp({ quality: 70 })
    .toFile(`${outputDir}/${name}-md.webp`);

  // 3. Small thumbnail
  await sharp(inputPath)
    .resize(600)
    .webp({ quality: 65 })
    .toFile(`${outputDir}/${name}-sm.webp`);

  console.log(`Optimized: ${file}`);
});
