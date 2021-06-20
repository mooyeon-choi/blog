import { Visual } from "./visual.js";

class KineticTypographyApp3 {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = 1;

    const WebFont = require('webfontloader');
    
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        this.visual = new Visual();

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
      },
    });
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    console.log(this.canvas.width, this.canvas.height, this.pixelRatio);
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.visual.show(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.visual.animate(this.ctx, t);
  }
}

export default KineticTypographyApp3;