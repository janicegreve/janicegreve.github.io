const sharp = require('sharp');
const path = require('path');

const { getLocalizedBooks } = require('./books.cjs');
const { transform, getAffineTransformBuffer, frontCorners, spineCorners, phoneCorners, kindleCorners } =
  require('./transformation.cjs');

exports.generate3d = async () => {
  for (const lang of ['en', 'da']) {
    const booksToProcess = getLocalizedBooks(lang);
    for (const book of booksToProcess) {
      for (const version of ["", ".ribbon"]) {
        const frontInputPath = book.status && version === ".ribbon"
          ? path.join(__dirname, `../src/assets/generated/${lang}/${book.id}.ribbon.png`)
          : path.join(__dirname, `../src/assets/covers-raw/${book.coverRaw ?? book.id}.png`);
        const frontOutputPath = path.join(__dirname, `../src/assets/generated/temp/${lang}/${book.id}.front.png`);
        const spineInputPath = path.join(__dirname, `../src/assets/covers-raw/${book.coverRaw ?? book.id}.spine.png`);
        const spineOutputPath = path.join(__dirname, `../src/assets/generated/temp/${lang}/${book.id}.spine.png`);

        const overlayPath = path.join(__dirname, `../src/assets/masks3d/overlay.png`);
        const outputPath = path.join(__dirname, `../src/assets/generated/${lang}/${book.id}${version}.3d.png`);

        try {
          await transform(frontInputPath, frontOutputPath, frontCorners);
          await transform(spineInputPath, spineOutputPath, spineCorners);

          await sharp({
            create: {
              width: 2850,
              height: 1917,
              channels: 4,
              background: '#00000000',
            }
          })
          .composite([
            { input: frontOutputPath },
            { input: spineOutputPath },
            {
              input: await getAffineTransformBuffer(frontInputPath, kindleCorners),
              left: kindleCorners[0],
              top: kindleCorners[1],
              blend: 'over',
            },
            {
              input: await getAffineTransformBuffer(frontInputPath, phoneCorners),
              left: phoneCorners[0],
              top: phoneCorners[1],
              blend: 'over',
            },
            {
              input: overlayPath,
              blend: 'over'
            },
          ])
          .png()
          .toFile(outputPath);

          console.log(`✅ [${lang.toUpperCase()}] Generated: ${book.id}${version}.3d.png`);
        } catch (err) {
          console.error(`❌ [${lang.toUpperCase()}] Error generating 3D cover for ${book.id}:`, err.message);
          throw err;
        }
      }
    }
  }
}
