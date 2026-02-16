const { intToRGBA, rgbaToInt } = require('jimp');

exports.getBilinearColor = (image, x, y) => {
  const x1 = Math.floor(x);
  const y1 = Math.floor(y);
  const x2 = x1 + 1;
  const y2 = y1 + 1;

  // Get the four surrounding pixels
  const c11 = image.getPixelColor(x1, y1);
  const c21 = image.getPixelColor(x2, y1);
  const c12 = image.getPixelColor(x1, y2);
  const c22 = image.getPixelColor(x2, y2);

  // Calculate weights (how close the point is to each pixel)
  const dx = x - x1;
  const dy = y - y1;

  // Interpolate colors for each RGBA channel
  const interpolate = (s1, s2, s3, s4) =>
    (s1 * (1 - dx) * (1 - dy)) + (s2 * dx * (1 - dy)) + (s3 * (1 - dx) * dy) + (s4 * dx * dy);

  const rgba11 = intToRGBA(c11);
  const rgba21 = intToRGBA(c21);
  const rgba12 = intToRGBA(c12);
  const rgba22 = intToRGBA(c22);

  const r = Math.round(interpolate(rgba11.r, rgba21.r, rgba12.r, rgba22.r));
  const g = Math.round(interpolate(rgba11.g, rgba21.g, rgba12.g, rgba22.g));
  const b = Math.round(interpolate(rgba11.b, rgba21.b, rgba12.b, rgba22.b));
  const a = Math.round(interpolate(rgba11.a, rgba21.a, rgba12.a, rgba22.a));

  return rgbaToInt(r, g, b, a);
}
