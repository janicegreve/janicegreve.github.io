const sharp = require('sharp');
const path = require('path');

const { getLocalizedBooks } = require('./books.cjs');

exports.generateWebP = async () => {
  for (const lang of ['en', 'da']) {
    const dir = path.join(__dirname, `../src/assets/generated/${lang}`);

    const convertRaw = async (book) => {
      await sharp(path.join(__dirname, `../src/assets/covers-raw/${book.coverRaw ?? book.id}.png`))
        .webp()
        .toFile(path.join(dir, `${book.id}.webp`));
    }

    const convert = async (name) => {
      await sharp(path.join(dir, `${name}.png`))
        .webp()
        .toFile(path.join(dir, `${name}.webp`));
    }

    const convert3d = async (name) => {
      await sharp(path.join(dir, `${name}.png`))
        .extract({ left: 568, top: 232, width: 1904, height: 1519 })
        .resize({ width: 1200 })
        .webp()
        .toFile(path.join(dir, `${name}.webp`));
    }

    const booksToProcess = getLocalizedBooks(lang);
    for (const book of booksToProcess) {
      try {
        await convertRaw(book);
        await convert(`${book.id}.ribbon`);
        await convert3d(`${book.id}.3d`);
        await convert3d(`${book.id}.ribbon.3d`);

        console.log(`✅ [${lang.toUpperCase()}] Generated WebP files for: ${book.id}`);
      } catch (err) {
        console.error(`❌ [${lang.toUpperCase()}] Error generating WebP files for ${book.id}:`, err.message);
        throw err;
      }
    }
  }
}
