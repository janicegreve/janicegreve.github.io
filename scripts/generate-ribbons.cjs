const sharp = require('sharp');
const path = require('path');

const { getLocalizedBooks } = require('./books.cjs');

const enStrings = require('../src/i18n/locales/en.json');
const daStrings = require('../src/i18n/locales/da.json');

const locales = {
  en: enStrings,
  da: daStrings
};

exports.generateRibbons = async () => {
  for (const lang of ['en', 'da']) {
    const dir = path.join(__dirname, `../src/assets/generated/${lang}`);

    const booksToProcess = getLocalizedBooks(lang);
    for (const book of booksToProcess) {
      if (!book.status) continue;

      const ribbonText = locales[lang].book.status[book.status].toUpperCase();
      const fontSize = locales[lang].book.fontSize?.[book.status] ?? "28";

      var startColor = 'aaaaaa';
      var endColor = '666666';
      switch (book.status) {
        case 'now':
          startColor = '00d492'; // emerald-400
          endColor = '009966'; // emerald-600
          break;
        case 'new':
          startColor = 'fcd34d'; // amber-300
          endColor = 'f59e0b'; // amber-500
          break;
        case 'soon':
          startColor = '6366f1'; // indigo-500
          endColor = '4338ca'; // indigo-700
          break;
        case 'later':
          startColor = 'FF8300';
          endColor = 'D65500';
          break;
        case 'next':
          startColor = 'B200FF';
          endColor = '8D00CD';
          break;
      }

      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
          <defs>
            <linearGradient id="funkyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="30%" style="stop-color:#${startColor};stop-opacity:1" />
              <stop offset="70%" style="stop-color:#${endColor};stop-opacity:1" />
            </linearGradient>

            <filter id="ribbonShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="10" flood-opacity="0.8"/>
            </filter>
          </defs>

          <g transform="rotate(45 450 50)">
            <rect
              x="100"
              y="30"
              width="800"
              height="75"
              fill="url(#funkyGrad)"
              filter="url(#ribbonShadow)"
            />
            <text
              x="520"
              y="68"
              fill="white"
              font-family="sans-serif"
              font-size="${fontSize}"
              text-anchor="middle"
              dominant-baseline="middle"
              letter-spacing="4"
            >
              ${ribbonText}
            </text>
          </g>
        </svg>
      `.trim();

      const ribbonSvg = Buffer.from(svgString);

      const inputPath = path.join(__dirname, `../src/assets/covers-raw/${book.coverRaw ?? book.id}.png`);
      const outputPath = path.join(dir, `${book.id}.ribbon.png`);

      try {
        await sharp(inputPath)
          .composite([{ input: ribbonSvg, gravity: 'northeast' }])
          .png()
          .toFile(outputPath);

        console.log(`✅ [${lang.toUpperCase()}] Generated: ${book.id}.ribbon.png`);
      } catch (err) {
        console.error(`❌ [${lang.toUpperCase()}] Error generating ribbon cover for ${book.id}:`, err.message);
        throw err;
      }
    }
  }
}
