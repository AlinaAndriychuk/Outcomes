import gsap from 'gsap'

export default class Ball {
  constructor(circle, x, y) {
    this.ball = circle;
    this.isGroup = circle.classList.contains('js-group');
    this.x = x || 0;
    this.y = y || 0;
    this.originalX = x || 0;
    this.originalY = y || 0;
    this.vx = 0;
    this.vy = 0;
    // this.friction = 0.9;
    // this.springFactor = 0.01;
    this.power = 70;

    this.init()
  }

  init() {
    this.addHandler();
    this.move();
  }

  addHandler() {
    this.ball.addEventListener('click', ()=> {})
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  think(x, y) {
    const dx = this.x - x;
    const dy = this.y - y;

    // const dist = Math.sqrt(dx*dx + dy*dy);
    
    // interaction
    const angle = Math.atan2(dy, dx);
    const tx = this.x + Math.cos(angle);
    const ty = this.y + Math.sin(angle);

    this.vx = (tx - this.x) * this.power;
    this.vy = (ty - this.y) * this.power;

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

  hide() {
    gsap.to(this.ball, {
      scale: this.scale,
      y:"+= 20",
    });

    gsap.to(this.ball.querySelector('.js-text'), {
      scale: 0,
      y:"+= 20",
      display: 'none',
      duration: 0.3
    });
  }

  show() {
    this.scale = gsap.getProperty(this.ball, "scale");
    gsap.to(this.ball, {
      scale: 1,
      y:"-= 20",
    });

    gsap.to(this.ball.querySelector('.js-text'), {
      scale: 1,
      y:"-= 20",
      delay: 0.1,
      display: 'block',
      duration: 0.3,
    });
  }

  move() {
    gsap.to(this.ball, {
      x: this.x,
      y: this.y,
      ease: 'back.out(1.5)',
      duration: 0.5
    });
  }
}