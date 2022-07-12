const { createCanvas, loadImage } = require('canvas');

module.exports = class Rank {
  constructor() {
    this.avatar = "https://cdn.discordapp.com/embed/avatars/0.png";
    this.foreground = {
      color: "#2a2e35",
      opacity: 0.8
    };
    this.background = {
      type: "color",
      background: "#23272a"
    };
    this.bar = {
      color: "#5b58f2",
      opacity: 1
    };
    this.discriminator = {
      data: "0000",
      color: "#23272a",
      size: 35
    };
    this.username = {
      data: "username",
      color: "#fff",
      size: 30
    };
    this.level = {
      data: 1,
      display: true,
      text: 'Level',
      text_color: "#fff",
      number_color: "#fff",
      size: 38
    };
    this.rank = {
      data: 1,
      display: true,
      text: 'Rank',
      text_color: "#fff",
      number_color: "#fff",
      size: 38
    };
    this.current_xp = {
      data: 0,
      color: "#000"
    };
    this.required_xp = {
      data: 0,
      color: "#000"
    };
    this.status = null;
    this.border = null;
  }

  setAvatar(image) {
    this.avatar = image;

    if (!image) throw new Error("The argument of setAvatar method is not an image or an URL.");

    return this;
  }

  setBackground(type, value) {
    const types = ["color", "image"];
    if (!type || typeof type !== "string") throw new Error("The first argument of setBackground method is not a string.");
    if (!types.includes(type)) throw new Error("The first argument of setBackground is not 'color' or 'image' type.");
    if (type === "color" && !value) throw new Error("The second argument of setBackground method is not a hexadecimal color.");
    if (type === "image" && !value) throw new Error("The second argument of setBackground method is not an image or an URL.");
    if (type === "color" && !/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(value)) throw new Error("The second argument of setBackground method is not a hexadecimal color.");

    this.background.type = type;
    this.background.background = value;

    return this;
  }

  setBarColor(color) {
    if (!color || typeof color !== "string") throw new Error("The argument of setBarColor method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The argument of setBarColor method is not a hexadecimal color.");

    this.bar.color = color;

    return this;
  }

  setBarOpacity(opacity) {
    if (typeof opacity !== "number") throw new Error("The argument of setBarOpacity method is not a number.");
    if (opacity < 0 || opacity > 1) throw new Error("The argument of setBarOpacity method is not between 0 and 1 (0 and 1 included).");

    this.bar.opacity = opacity;

    return this;
  }

  setBorder(color) {
    if (!color || typeof color !== "string") throw new Error("The argument of setBorder method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The argument of setBorder method is not a hexadecimal color.");

    this.border = color;

    return this;
  }

  setForegroundColor(color) {
    if (!color || typeof color !== "string") throw new Error("The argument of setBorder method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The argument of setForegroundColor method is not a hexadecimal color.");

    this.foreground.color = color;

    return this;
  }

  setForegroundOpacity(opacity = 0.8) {
    if (typeof opacity !== "number") throw new Error("The argument of setForegroundOpacity method is not a number.");
    if (opacity < 0 || opacity > 1) throw new Error("The value of the opacity of setForegroundOpacity method is not between 0 and 1 (0 and 1 included).");

    this.foreground.opacity = opacity;

    return this;
  }

  setLevel({ data, text = "Level", display = true }) {
    if (typeof data !== "number") throw new Error("The first argument of setLevel method is not a number.");
    if (typeof text !== "string") throw new Error("The second argument of setLevel method is not a string.");
    if (typeof display !== "boolean") throw new Error("The third argument of setLevel method is not a boolean.");

    this.level.data = data;
    this.level.text = text;
    this.level.display = display;

    return this;
  }

  setLevelColor({ text = "#fff", number = "#fff" }) {
    if (typeof text !== "string") throw new Error("The first argument of setLevelColor method is not a string.");
    if (typeof number !== "string") throw new Error("The second argument of setLevelColor method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(text)) throw new Error("The first argument of setLevelColor method is not a hexadecimal color.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(number)) throw new Error("The second argument of setLevelColor method is not a hexadecimal color.");

    this.level.text_color = text;
    this.level.number_color = number;

    return this;
  }

  setRank({ data, text = "Rank", display = true }) {
    if (typeof data !== "number") throw new Error("The first argument of setRank method is not a number.");
    if (typeof text !== "string") throw new Error("The second argument of setRank method is not a string.");
    if (typeof display !== "boolean") throw new Error("The third argument of setRank method is not a boolean.");

    this.rank.data = data;
    this.rank.text = text;
    this.rank.display = display;

    return this;
  }

  setRankColor({ text = "#fff", number = "#fff" }) {
    if (typeof text !== "string") throw new Error("The first argument of setRankColor method is not a string.");
    if (typeof number !== "string") throw new Error("The second argument of setRankColor method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(text)) throw new Error("The first argument of setRankColor method is not a hexadecimal color.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(number)) throw new Error("The second argument of setRankColor method is not a hexadecimal color.");

    this.rank.text_color = text;
    this.rank.number_color = number;

    return this;
  }

  setCurrentXp(xp, color = "#000") {
    if (typeof xp !== "number") throw new Error("The first argument of setCurrentXp method is not a number.");
    if (!color || typeof color !== "string") throw new Error("The second argument of setCurrentXp method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The second argument of setCurrentXp method is not a hexadecimal color.");

    this.current_xp.data = xp;
    this.current_xp.color = color;

    return this;
  }

  setRequiredXp(xp, color = "#000") {
    if (typeof xp !== "number") throw new Error("The first argument of setRequiredXp method is not a number.");
    if (!color || typeof color !== "string") throw new Error("The second argument of setRequiredXp method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The second argument of setRequiredXp method is not a hexadecimal color.");

    this.required_xp.data = xp;
    this.required_xp.color = color;

    return this;
  }

  setUsername(username, color = "#fff") {
    if (!username || typeof username !== "string") throw new Error("The first argument of setUsername method is not a string.");
    if (!color || typeof color !== "string") throw new Error("The second argument of setUsername method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The second argument of setUsername method is not a hexadecimal color.");

    this.username.data = username;
    this.username.color = color;

    return this;
  }

  setDiscriminator(discriminator, color = "#fff") {
    if (!discriminator || typeof discriminator !== "string") throw new Error("The first argument of setDiscriminator method is not a string.");
    if (!color || typeof color !== "string") throw new Error("The second argument of setDiscriminator method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The second argument of setDiscriminator method is not a hexadecimal color.");

    this.discriminator.data = discriminator.slice(0, 4);
    this.discriminator.color = color;

    return this;
  }

  setStatus(status) {
    if (!status || typeof status !== "string") throw new Error("The argument of setStatus method is not a string.");

    const statutes = {
      online: "#3ba55c",
      idle: "#faa61a",
      dnd: "#ed4245",
      stream: "#593695",
      offline: "#747f8e"
    };

    if (!statutes[status]) throw new Error("The argument of setStatus method is not a valid status.");

    this.status = statutes[status];

    return this;
  }

  setCustomStatus(color) {
    if (!color || typeof color !== "string") throw new Error("The argument of setCustomStatus method is not a string.");
    if (!/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) throw new Error("The argument of setCustomStatus method is not a hexadecimal color.");

    this.status = color;

    return this;
  }

  async build() {
    const xp_bar = Math.floor(this.current_xp.data / this.required_xp.data * 490);

    const canvas = createCanvas(800, 300);
    const ctx = canvas.getContext('2d');

    if (this.background.type === "color") {
      ctx.beginPath();
      ctx.fillStyle = this.background.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.closePath();
    } else if (this.background.type === "image") {
      try {
        ctx.drawImage(await loadImage(this.background.background), 0, 0, canvas.width, canvas.height);
      } catch {
        throw new Error("The image given in the second parameter of the setBackground method is not valid or you are not connected to the internet.");
      }
    }

    if (this.border) {
      ctx.strokeStyle = this.border;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }

    ctx.beginPath();
    ctx.fillStyle = this.foreground.color;
    ctx.globalAlpha = this.foreground.opacity;
    ctx.fillRect(25, 25, canvas.width - 50, canvas.height - 50);
    ctx.closePath();

    ctx.globalAlpha = 1;

    ctx.font = `bold ${this.username.size}px Manrope`;
    ctx.fillStyle = this.username.color;
    ctx.textAlign = "start";

    const username = this.username.data.length > 15 ? this.username.data.slice(0, 15) + '...' : this.username.data;

    ctx.fillText(username, 240, 125);

    ctx.textAlign = "center";
    ctx.font = `bold ${this.discriminator.size}px Manrope`;
    ctx.fillStyle = this.discriminator.color;
    ctx.fillText(`#${this.discriminator.data}`, ctx.measureText(username).width + 35 + 240, 128);

    if (this.rank.display === true) {
      ctx.textAlign = "start";
      ctx.font = `bold ${this.rank.size}px Manrope`;
      ctx.fillStyle = this.rank.text_color;
      ctx.fillText(`${this.rank.text}: ${this.rank.data}`, 240, 65);
    }

    if (this.level.display === true) {
      ctx.font = `bold ${this.level.size}px Manrope`;
      ctx.fillStyle = this.level.text_color;
      ctx.fillText(`${this.level.text}: ${this.level.data}`, 500, 65);
    }

    ctx.beginPath();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 2;
    ctx.fillStyle = "#efeded";
    ctx.moveTo(220, 135);
    ctx.lineTo(690, 135);
    ctx.quadraticCurveTo(710, 135, 710, 152.5);
    ctx.quadraticCurveTo(710, 170, 690, 170);
    ctx.lineTo(220, 170);
    ctx.lineTo(220, 135);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.globalAlpha = this.bar.opacity;
    ctx.lineWidth = 2;
    ctx.fillStyle = this.bar.color;
    ctx.moveTo(220, 135);
    ctx.lineTo(200 + xp_bar, 135);
    ctx.quadraticCurveTo(220 + xp_bar, 135, 220 + xp_bar, 152.5);
    ctx.quadraticCurveTo(220 + xp_bar, 170, 200 + xp_bar, 170);
    ctx.lineTo(220, 170);
    ctx.lineTo(220, 135);
    ctx.fill();
    ctx.textAlign = "start";
    ctx.font = "bold 28px Manrope";
    ctx.fillStyle = this.current_xp.color;
    ctx.fillText(this.current_xp.data, 240, 162)

    ctx.fillStyle = this.required_xp.color;
    ctx.fillText(` / ${this.required_xp.data}`, 240 + ctx.measureText(this.current_xp.data.toString()).width, 162)
    ctx.closePath();

    if (this.status) {
      ctx.beginPath();
      ctx.globalAlpha = 1;
      ctx.arc(130, 150, 95, 0, Math.PI * 2);
      ctx.fillStyle = this.status;
      ctx.fill();
      ctx.closePath();
    }

    ctx.beginPath();
    ctx.arc(130, 150, this.status ? 90 : 95, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    try {
      if (this.status) {
        ctx.drawImage(await loadImage(this.avatar), 40, 60, 180, 180);
      } else {
        ctx.drawImage(await loadImage(this.avatar), 35, 55, 190, 190);
      }
    } catch {
      throw new Error("The image given in the argument of the setAvatar method is not valid or you are not connected to the internet.");
    }

    return canvas;
  }
};