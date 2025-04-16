//npm install sharp --save-dev
//node scripts/optimize-images.js


const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/Assets/img'; //add desired folder
const outputDir = 'public/optimized'; //add desired folder

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath, (err, info) => {
        if (err) console.error(err);
        else console.log(`Converted ${file} to WebP: ${info.size} bytes`);
      });
  }
});