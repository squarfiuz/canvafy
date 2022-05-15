const { registerFont } = require("canvas");

registerFont(`${__dirname}/assets/fonts/Manrope/Manrope-Regular.ttf`, {
  family: "Manrope",
  weight: "regular",
  style: "normal"
});

registerFont(`${__dirname}/assets/fonts/Manrope/Manrope-Bold.ttf`, {
  family: "Manrope",
  weight: "bold",
  style: "normal"
});

registerFont(`${__dirname}/assets/fonts/Poppins/Poppins-Regular.ttf`, {
  family: "Poppins",
  weight: "regular",
  style: "normal"
});

registerFont(`${__dirname}/assets/fonts/Poppins/Poppins-Bold.ttf`, {
  family: "Poppins",
  weight: "bold",
  style: "normal"
});

module.exports = {
  Image: {
    affect: require("./src/affect"),
    batslap: require("./src/batslap"),
    beautiful: require("./src/beautiful"),
    darkness: require("./src/darkness"),
    delete: require("./src/delete"),
    gay: require("./src/gay"),
    greyscale: require("./src/greyscale"),
    invert: require("./src/invert")
  },
  Rank: require("./src/rank"),
  Spotify: require("./src/spotify"),
  Util: require("./plugins/Util"),
  WelcomeLeave: require("./src/welcome-leave")
};