const { fixGitHubPages } = require('./fix-gh-pages.cjs');

(async () => {
  await fixGitHubPages();

  process.exit(0);
})();
