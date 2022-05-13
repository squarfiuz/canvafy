const canvafy = require("../../index");

module.exports = {
  async image() {
    const image = await new canvafy.WelcomeLeave()
    .setAvatar("https://i.imgur.com/2pOpPKf.png")
    .setBackground("image", "https://th.bing.com/th/id/R.248b992f15fb255621fa51ee0ca0cecb?rik=K8hIsVFACWQ8%2fw&pid=ImgRaw&r=0")
    .setTitle("Welcome")
    .setDescription("Welcome to this server, go read the rules please!")
    .setBorder("#2a2e35")
    .setAvatarBorder("#2a2e35")
    .setOverlayOpacity(0.3)
    .build()

    return image;
  },
  name: "welcome-leave"
};