export default class Group {
  constructor(circle) {
    this.ball = circle;
    this.rect = this.ball.getBoundingClientRect();
    this.x = 0;
    this.y = 0;
    this.width = 0;

    this.init()
  }

  init() {
    this.ball.addEventListener('click', this.move.bind(this))
  }

  move(e) {
    this.x = this.rect.left;
    this.y = this.rect.top;
    this.width = this.rect.width;
    console.log(this.x)
  }
}