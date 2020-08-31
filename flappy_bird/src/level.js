const CONSTANTS = {
  GAPSIZE: 150,
  PIPE_SPACING: 220,
  PIPE_WIDTH: 50,
  PIPE_SPEED: 3
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [{x: 1000, top: Math.floor(Math.random() * this.dimensions.height - CONSTANTS.GAPSIZE) }]
    this.pipes.push(this.generate_pipe(1));
    this.pipes.push(this.generate_pipe(2));
    console.log(this.pipes);
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
  
  animate(ctx){
    this.drawBackground(ctx);
    this.movepipes();
    this.drawpipes(ctx);
  }

  movepipes(){
    for (let i = 0; i < 3; i++) {
        this.pipes[i]['x'] -= CONSTANTS.PIPE_SPEED;
    }
    if (this.pipes[0]['x'] <= -CONSTANTS.PIPE_WIDTH) {
        this.pipes.shift();
        this.pipes.push(this.generate_pipe());
        console.log(this.pipes);
    }
  }

  drawpipes(ctx){
    ctx.fillStyle = "green";
    for(let i=0; i < this.pipes.length; i++){
        let pipe = this.pipes[i];
        let x = pipe['x'];
        let width = CONSTANTS.PIPE_WIDTH;
        let top_y = 0;
        let top_height = pipe['top'];
        let bottom_y = top_height + CONSTANTS.GAPSIZE;
        let bottom_height = this.dimensions.height - bottom_y;
        ctx.fillRect(x, top_y, width, top_height);
        ctx.fillRect(x, bottom_y, width, bottom_height);
    }
  }
  
  generate_pipe(){
    return { x: this.pipes[this.pipes.length - 1]['x'] + CONSTANTS.PIPE_SPACING, top: Math.floor(Math.random() * (this.dimensions.height - CONSTANTS.GAPSIZE)) };
  }

}