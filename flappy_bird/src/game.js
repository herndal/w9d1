import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    canvas.addEventListener("mousedown", this.click.bind(this));
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate(){
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if (this.running) {
        window.requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart(){
      this.level = new Level(this.dimensions);
      this.bird = new Bird(this.dimensions);
      this.animate();
      this.running = false;
  }

  play() {
      this.running = true;
      this.animate();
  }

  click() {
    this.running ? this.bird.flap() : this.play();
  }
}

