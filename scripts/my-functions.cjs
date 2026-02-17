const fs = require('fs');

const { generateImages } = require('./generate-images.cjs');
const { fixGitHubPages } = require('./fix-gh-pages.cjs');

if (require.main === module) {
  const task = process.argv[2];

  if (task === 'gen') generateImages();
  if (task === 'fix') fixGitHubPages();
}
