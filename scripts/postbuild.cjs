const { fixGitHubPages } = require('./fix-gh-pages.cjs');
const { generateVersion } = require("./generate-version.cjs");

(async () => {
  await fixGitHubPages();
  await generateVersion();
})();
