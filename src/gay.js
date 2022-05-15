const { createCanvas, loadImage } = require("canvas");

module.exports = async (template_image) => {
  let image;
  try {
    image = await loadImage(template_image);
  } catch {
    throw new Error("The image given in the argument of the gay method is not valid or you are not connected to the internet.");
  }
  const background = await loadImage("./assets/images/gay.png");
  const canvas = await createCanvas(background.width, background.height);
  const ctx = canvas.getContext("2d");
  
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0);

  return canvas;
};