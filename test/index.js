const fs = require("fs");
const file = require("./codes/rank");

const main = async function() {
  const image = await file.image();

  fs.writeFile(`./test/images/${file.name}.png`, image.toBuffer(), (err) => {
    if (err) throw err;
  });
}

main();