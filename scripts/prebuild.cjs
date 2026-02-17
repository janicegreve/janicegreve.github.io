const { generateImages } = require('./generate-images.cjs');
const { generateVersion } = require("./generate-version.cjs");

(async () => {
  await generateImages();
  await generateVersion();

  process.exit(0);
})();
