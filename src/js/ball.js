import gsap from 'gsap'

export default class Ball {
  constructor(circle, x, y) {
    this.ball = circle;
    this.isGroup = circle.classList.contains('js-group');
    this.x = x || 0;
    this.y = y || 0;
    // this.originalX = x || 0;
    // this.originalY = y || 0;
    this.vx = 0;
    this.vy = 0;
    // this.friction = 0.9;
    // this.springFactor = 0.01;
    this.power = 50;

    this.init()
  }

  init() {
    this.addHandler();
    this.move();
  }

  addHandler() {
    this.ball.addEventListener('click', ()=> {})
  }

  // setPosition(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }

  think(x, y) {
    const dx = this.x - x;
    const dy = this.y - y;

    // const dist = Math.sqrt(dx*dx + dy*dy);
    
    // interaction
    const angle = Math.atan2(dy, dx);
    const tx = this.x + Math.cos(angle) * this.power;
    const ty = this.y + Math.sin(angle) * this.power;

    this.vx += tx - this.x;
    this.vy += ty - this.y;

    // spring back
    // const dx1 = -(this.x - this.originalX);
    // const dy1 = -(this.y - this.originalY);

    // this.vx += dx1 * this.springFactor;
    // this.vy += dy1 * this.springFactor;

    // friction
    // this.vx *= this.friction;
    // this.vy *= this.friction;

    // actual move
    this.x += this.vx;
    this.y += this.vy;
  }

  move() {
    gsap.to(this.ball, {
      x: this.x,
      y: this.y
    });
  }
}