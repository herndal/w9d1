const CONSTANTS = {
    GRAVITY: 0.8,
    FLAP_SPEED: -13,
    TERMINAL_VEL: 12,
    BIRD_WIDTH: 40,
    BIRD_HEIGHT: 30
};

export default class Bird {

    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 0;
        this.x = dimensions.width / 3;
        this.y = dimensions.height / 2;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    }

    animate(ctx) {
        console.log(CONSTANTS.GRAVITY);
        this.drawBird(ctx);
        this.move();
    }

    move() {
        this.y += this.velocity;
        this.velocity = Math.min(this.velocity + CONSTANTS.GRAVITY, CONSTANTS.TERMINAL_VEL);
    }

    flap() {
        this.velocity = CONSTANTS.FLAP_SPEED;
    }
}