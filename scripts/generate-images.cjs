const path = require('path');
const fs = require('fs');

const { generateRibbons } = require('./generate-ribbons.cjs');
const { generate3d } = require('./generate-3d.cjs');
const { generateWebP } = require('./generate-webp.cjs');

const generateImages = async () => {
  for (const lang of ['en', 'da']) {
    var dir = path.join(__dirname, `../src/assets/generated/${lang}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    dir = path.join(__dirname, `../src/assets/generated/temp/${lang}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  await generateRibbons();
  await generate3d();
  await generateWebP();
}

(async () => {
  try {
    await generateImages();
    process.exit(0);
  } catch (err) {
    console.error(`❌ Error executing 'generate-images':`, err.message);
    process.exit(1);
  }
})();
