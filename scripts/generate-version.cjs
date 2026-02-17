const fs = require('fs');
const path = require('path');

exports.generateVersion = async () => {
  try {
    const version = { hash: Date.now() };
    fs.writeFileSync(
      path.join(__dirname, '../public/version.json'),
      JSON.stringify(version)
    );
    console.log('✅ Version file generated.');
  } catch (error) {
    console.error('❌ Failed to create version file:', err);
    process.exit(1);
  }
}
