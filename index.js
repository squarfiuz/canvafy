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
    invert: require("./src/invert")
  },
  RankCard: require("./src/rankcard"),
  Spotify: require("./src/spotify"),
  Util: require("./plugins/Util"),
  WelcomeLeave: require("./src/welcome-leave")
};