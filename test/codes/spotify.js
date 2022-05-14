const canvafy = require("../../index");

module.exports = {
  async image() {
    const image = await new canvafy.Spotify()
    .setAuthor("Alan Walker, Ava Max")
    .setAlbum("Alan Walker Album")
    .setBackground("image", "https://th.bing.com/th/id/R.0bbabe949adc2ea6c853eddad2f38519?rik=jshX8YIYBDnF4w&pid=ImgRaw&r=0")
    .setTimestamp(50000, 179000)
    .setImage("https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177")
    .setTitle("Alone, Pt II")
    .build();

    return image;
  },
  name: "spotify"
};