import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/images";
const outputDir = "./public";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const jobs = fs.readdirSync(inputDir)
  .filter((file) => /\.(png|jpe?g)$/i.test(file))
  .flatMap((file) => {
  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

    return [
      { suffix: "", width: 1600, webp: 75, avif: 56 },
      { suffix: "-md", width: 1000, webp: 70, avif: 52 },
      { suffix: "-sm", width: 600, webp: 65, avif: 48 },
    ].flatMap(({ suffix, width, webp, avif }) => [
      sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: webp })
        .toFile(`${outputDir}/${name}${suffix}.webp`),
      sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: avif, effort: 6 })
        .toFile(`${outputDir}/${name}${suffix}.avif`),
    ]);
  });

await Promise.all(jobs);
console.log(`Optimized ${jobs.length} image variants`);
