const { createCanvas, loadImage } = require('canvas');

module.exports = class WelcomeLeave {
    constructor() {
        this.avatar = "https://cdn.discordapp.com/embed/avatars/0.png";
        this.background = {
            type: "color",
            background: "#23272a"
        };
        this.title = {
            data: "Welcome",
            color: "#fff"
        };
        this.description = {
            data: "Welcome to this server, go read the rules please!",
            color: "#a7b9c5"
        };
        this.overlay_opacity = 0;
        this.border = "#2a2e35";
        this.avatar_border = "#2a2e35";
    }

    setAvatar(url) {
        this.avatar = url;
        return this;
    }

    setAvatarBorder(color) {
        if (color) {
            if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
                this.avatar_border = color;
                return this;
            } else {
                throw new Error("Invalid color for the argument in the setBorder method. You must give a hexadecimal color.")
            }
        } else {
            throw new Error("You must give a hexadecimal color as the argument of setBorder method.");
        }
    }
    
    setBackground(type, value) {
        if (type === 'color') {
            if (value) {
                if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(value)) {
                    this.background.type = "color";
                    this.background.background = value;
                    return this;
                } else {
                    throw new Error("Invalid color for the second argument in setForgound method. You must give a hexadecimal color.");
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

    setDescription(text, color = "#a7b9c5") {
        if (text) {
            if (text.length > 80) throw new Error("The maximum size of the description is 80 characters.");
            this.description.data = text;
            if (color) {
                if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
                    this.description.color = color;
                }
            }
        } else {
            throw new Error("You must give a text as the first argument of setDescription method.");
        }

        return this;
    }

    setOverlayOpacity(opacity = 0) {
        if (opacity) {
            if (opacity >= 0 && opacity <= 1) {
                this.overlay_opacity = opacity;
                return this;
            } else {
                throw new Error("The value of the opacity of setOverlayOpacity method must be between 0 and 1 (0 and 1 included).");
            }
        }
    }

    setTitle(text, color = "#fff") {
        if (text) {
            if (text.length > 20) throw new Error("The maximum size of the title is 20 characters.");
            this.title.data = text;
            if (color) {
                if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)) {
                    this.title.color = color;
                }
            }
        } else {
            throw new Error("You must give a text as the first argument of setDescription method.");
        }

        return this;
    }

    async build() {
        const canvas = createCanvas(700, 350);
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = this.border;
        ctx.moveTo(55, 15);
        ctx.lineTo(canvas.width - 55, 15);
        ctx.quadraticCurveTo(canvas.width - 20, 20, canvas.width - 15, 55);
        ctx.lineTo(canvas.width - 15, canvas.height - 55);
        ctx.quadraticCurveTo(canvas.width - 20, canvas.height - 20, canvas.width - 55, canvas.height - 15);
        ctx.lineTo(55, canvas.height - 15);
        ctx.quadraticCurveTo(20, canvas.height - 20, 15, canvas.height - 55);
        ctx.lineTo(15, 55);
        ctx.quadraticCurveTo(20, 20, 55, 15);
        ctx.lineTo(56, 15);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(65, 25);
        ctx.lineTo(canvas.width - 65, 25);
        ctx.quadraticCurveTo(canvas.width - 25, 25, canvas.width - 25, 65);
        ctx.lineTo(canvas.width - 25, canvas.height - 65);
        ctx.quadraticCurveTo(canvas.width - 25, canvas.height - 25, canvas.width - 65, canvas.height - 25);
        ctx.lineTo(65, canvas.height - 25);
        ctx.quadraticCurveTo(25, canvas.height - 25, 25, canvas.height - 65);
        ctx.lineTo(25, 65);
        ctx.quadraticCurveTo(25, 25, 65, 25);
        ctx.lineTo(66, 25);
        ctx.closePath();
        ctx.clip();

        ctx.globalAlpha = 1;

        if (this.background.type === "color") {
            ctx.beginPath();
            ctx.fillStyle = this.background.background;
            ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20)
        } else if (this.background.type === "image") {
            try {
                ctx.drawImage(await loadImage(this.background.background), 10, 10, canvas.width - 20, canvas.height - 20);
            } catch {
                throw new Error("The image given in the second parameter of the setBackground method is not valid or you are not connected to the internet.");
            }
        }

        ctx.beginPath();
        ctx.globalAlpha = this.overlay_opacity;
        ctx.fillStyle = '#000';
        ctx.moveTo(65, 25);
        ctx.lineTo(canvas.width - 65, 25);
        ctx.quadraticCurveTo(canvas.width - 25, 25, canvas.width - 25, 65);
        ctx.lineTo(canvas.width - 25, canvas.height - 65);
        ctx.quadraticCurveTo(canvas.width - 25, canvas.height - 25, canvas.width - 65, canvas.height - 25);
        ctx.lineTo(65, canvas.height - 25);
        ctx.quadraticCurveTo(25, canvas.height - 25, 25, canvas.height - 65);
        ctx.lineTo(25, 65);
        ctx.quadraticCurveTo(25, 25, 65, 25);
        ctx.lineTo(66, 25);
        ctx.fill();
        ctx.closePath();

        ctx.font = 'bold 38px Poppins';
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.title.color;
        ctx.textAlign = 'center';
        ctx.fillText(this.title.data, canvas.width / 2, 225);

        ctx.font = 'regular 26px Poppins';
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.description.color;
        ctx.textAlign = 'center';

        if(this.description.data.length > 35) {
            const texts = (function(string) {
            const array = [string, []];
            const substrings = string.split(' ');
            let i = substrings.length;

            do {
                i--;
                array[1].unshift(substrings[i]);
                substrings.pop();
            } while (substrings.join(' ').length > 35);

            array[0] = substrings.join(' ');
            array[1] = array[1].join(' ');
            return array;
            })(this.description.data);
            ctx.fillText(texts[0], canvas.width / 2, 265);
            ctx.fillText(texts[1], canvas.width / 2, 305);
        } else {
            ctx.fillText(this.description.data, canvas.width / 2, 265);
        }

        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.avatar_border;
        ctx.arc(canvas.width / 2, 110, 66, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(canvas.width / 2, 110, 60, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        try {
            ctx.drawImage(await loadImage(this.avatar), canvas.width / 2 - 60, 50, 120, 120);
        } catch {
            throw new Error("The image given in the argument of the setAvatar method is not valid or you are not connected to the internet.");
        }

        return canvas;
    }
};