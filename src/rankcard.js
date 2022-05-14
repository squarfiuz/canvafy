const { createCanvas, loadImage } = require('canvas');

module.exports = class RankCard {
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

  setAvatar(url) {
    this.avatar = url;
    return this;
  }

  setBackground(type, value) {
    if (type === 'color') {
      if (value) {
        if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(value)) {
          this.background.type = "color";
          this.background.background = value;
          return this;
        } else {
          throw new Error("Invalid color for the second argument in setBackground method. You must give a hexadecimal color.");
        }
      } else {
        throw new Error("You must give a hexadecimal color as a second argument of setBackground method.");
      }
    } else if (type === 'image') {
      if (value) {
        this.background.type = "image";
        this.background.background = value;
        return this;
      } else {
        throw new Error("You must give a background URL as a second argument.");
      }
    } else {
      throw new Error("The first argument of setBackground must be 'color' or 'image'.");
    }
  }

  setBarColor(color) {
    if (color) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
        this.bar.color = color;
        return this;
      } else {
        throw new Error("The argument of setBorderColor method must be a hexadecimal color.");
      }
    }
  }

  setBarOpacity(opacity) {
    if (opacity) {
      if (opacity >= 0 && opacity <= 1) {
        this.bar.opacity = opacity;
        return this;
      } else {
        throw new Error("The value of the opacity of setBarOpacity method must be between 0 and 1 (0 and 1 included).");
      }
    }
  }

  setBorder(color) {
    if (color) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
        this.border = color;
        return this;
      } else {
        throw new Error("Invalid color for the argument in the setBorder method. You must give a hexadecimal color.")
      }
    } else {
      throw new Error("You must give a hexadecimal color as the argument of setBorder method.");
    }
  }

  setForegroundColor(color) {
    if (color) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
        this.foreground.color = color;
        return this;
      } else {
        throw "The argument of setForegroundColor method must be a hexadecimal color."
      }
    }
  }

  setForegroundOpacity(opacity = 0.8) {
    if (opacity) {
      if (opacity >= 0 && opacity <= 1) {
        this.foreground.opacity = opacity;
        return this;
      } else {
        throw new Error("The value of the opacity of setForegroundOpacity method must be between 0 and 1 (0 and 1 included).");
      }
    }
  }

  setLevel(data, text = "Level", display = true) {
    if (data) {
      if (typeof data === "number") {
        this.level.data = data;
        if (typeof text === "string") this.level.text = text;
        if (display === false || display === true) this.level.display = display;
        return this;
      } else {
        throw new Error("The first argument of setLevel method is not a number.");
      }
    } else {
      throw new Error("You must give a number as the first argument of setLevel method.");
    }
  }

  setLevelColor(text = "#fff", number = "#fff") {
    if (text) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(text)) {
        this.level.text_color = text;
      }
    }

    if (number) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(number)) {
        this.level.number_color = number;
      }
    }

    return this;
  }

  setRank(data, text = "Rank", display = true) {
    if (data) {
      if (typeof data === "number") {
        this.rank.data = data;
        if (typeof text === "string") this.rank.text = text;
        if (display === false || display === true) this.rank.display = display;
        return this;
      } else {
        throw new Error("The first argument of setRank method is not a number.");
      }
    } else {
      throw new Error("You must give a number as the first argument of setRank method.");
    }
  }

  setRankColor(text = "#fff", number = "#fff") {
    if (text) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(text)) {
        this.rank.text_color = text;
      }
    }

    if (number) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(number)) {
        this.rank.number_color = number;
      }
    }

    return this;
  }

  setCurrentXp(xp, color = "#000") {
    if (xp) {
      if (typeof xp === "number") {
        this.current_xp.data = xp;
        if (color) {
          if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
            this.current_xp.color = color;
          }
        }
        return this;
      } else {
        throw new Error("The first argument of setCurrentXp method is not a number.");
      }
    } else {
      throw new Error("You must give a number as the first argument of setCurrentXp method.");
    }
  }

  setRequiredXp(xp, color = "#000") {
    if (xp) {
      if (typeof xp === "number") {
        this.required_xp.data = xp;
        if (color) {
          if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
            this.required_xp.color = color;
          }
        }
        return this;
      } else {
        throw new Error("The first argument of setRequiredXp method is not a number.");
      }
    } else {
      throw new Error("You must give a number as the first argument of setRequiredXp method.");
    }
  }

  setUsername(username, color = "#fff") {
    this.username.data = username;
    if (color) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
        this.username.color = color;
      }
    }

    return this;
  }

  setDiscriminator(discriminator, color = "#fff") {
    this.discriminator.data = discriminator.slice(0, 4);
    if (color) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
        this.discriminator.color = color;
      }
    }

    return this;
  }

  setStatus(status) {
    if (status === "online") {
      this.status = "#3ba55c";
    } else if (status === "idle") {
      this.status = "#faa61a"
    } else if (status === "dnd") {
      this.status = "#ed4245";
    } else if (status === "stream") {
      this.status = "#593695";
    } else if (status === "offline") {
      this.status = "#747f8e";
    }
    return this;
  }

  setCustomStatus(color) {
    if (color) {
      if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
        this.status = color;
        return this;
      } else {
        throw new Error("Invalid color for the argument in the setCustomStatus method. You must give a hexadecimal color.")
      }
    } else {
      throw new Error("You must give a hexadecimal color as a argument of setCustomStatus method.");
    }
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

    ctx.textAlign = "start";
    ctx.font = `bold ${this.rank.size}px Manrope`;
    ctx.fillStyle = this.rank.text_color;
    ctx.fillText(`${this.rank.text}: ${this.rank.data}`, 240, 65);

    ctx.font = `bold ${this.level.size}px Manrope`;
    ctx.fillStyle = this.level.text_color;
    ctx.fillText(`${this.level.text}: ${this.level.data}`, 500, 65);

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