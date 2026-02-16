const sharp = require('sharp');
const { Jimp } = require('jimp');
const PerspT = require('perspective-transform');

const { getBilinearColor } = require('./interpolation.cjs');

// [topLeftX, topLeftY, topRightX, topRightY, bottomRightX, bottomRightY, bottomLeftX, bottomLeftY]
exports.frontCorners = [
  836, 298,
  1753, 268,
  1713, 1568,
  876, 1687,
];
exports.spineCorners = [
  751, 267,
  837, 298,
  877, 1689,
  792, 1569,
];
exports.phoneCorners = [
  1462, 1000,
  1803, 1000,
  1803, 1594,
  1462, 1594,
];
exports.kindleCorners = [
  1727, 566,
  2371, 566,
  2371, 1442,
  1727, 1442,
];

exports.transform = async (inputPath, outputPath, dstCorners) => {
  try {
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const srcCorners = [
      0, 0,
      width, 0,
      width, height,
      0, height
    ];
    const perspT = PerspT(srcCorners, dstCorners);
    const result = new Jimp({ width: 2850, height: 1917, color: 0x00000000 });

    result.scan(0, 0, result.bitmap.width, result.bitmap.height, function(x, y) {
      const srcPt = perspT.transformInverse(x, y);

      if (srcPt[0] >= 0 && srcPt[0] < width - 1 && srcPt[1] >= 0 && srcPt[1] < height - 1) {
        const color = getBilinearColor(image, srcPt[0], srcPt[1]);
        this.setPixelColor(color, x, y);
      }
    });
    await result.write(outputPath);
  } catch (err) {
    console.error(`❌ Error perspective transforming '${inputPath}': `, err.message);
    throw err;
  }
}

exports.getAffineTransformBuffer = async (inputPath, dstCorners) => {
  try {
    const metadata = await sharp(inputPath).metadata();
    const w = metadata.width;
    const h = metadata.height;

    // 1. Horizontal Edge (Top-Left to Top-Right)
    const a = (dstCorners[2] - dstCorners[0]) / w; // Scale X
    const c = (dstCorners[3] - dstCorners[1]) / w; // Shear Y (Vertical tilt)

    // 2. Vertical Edge (Top-Left to Bottom-Left)
    const b = (dstCorners[6] - dstCorners[0]) / h; // Shear X (Horizontal tilt)
    const d = (dstCorners[7] - dstCorners[1]) / h; // Scale Y

    return await sharp(inputPath)
      .affine([a, b, c, d], { background: '#00000000' })
      .toBuffer();
  } catch (err) {
    console.error(`❌ Error affine transforming '${inputPath}': `, err.message);
    throw err;
  }
}
