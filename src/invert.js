const { createCanvas, loadImage } = require("canvas");

module.exports = async (template_image) => {
  const image = await loadImage(template_image);
  const canvas = await createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");
  
  ctx.drawImage(image, 0, 0);

  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < image_data.data.length; i += 4) {
    image_data.data[i] = 255 - image_data.data[i];
    image_data.data[i + 1] = 255 - image_data.data[i + 1];
    image_data.data[i + 2] = 255 - image_data.data[i + 2];
  }

  ctx.putImageData(image_data, 0, 0);

  return canvas;
};