import gsap from 'gsap'
import sayHello from './lib/sayHello';
import Ball from './ball';

class Animation {
  constructor(container) {
    this.container = container;
    this.circles = this.container.getElementsByClassName('js-circle');
    this.balls = [];
    this.currentBall = {ball: null};

    this.ballsOptions = [
      {x: 730, y: 200},
      {x: 840, y: 70},
      {x: 1150, y: 350},
      {x: 430, y: 540},
      {x: 1070, y: 470},
      {x: 450, y: 50},
      {x: 630, y: 10},
      {x: 310, y: 150},
      {x: 200, y: 250},
      {x: 10, y: 70},
      {x: 220, y: 0},
      {x: 550, y: 300},
      {x: 730, y: 320},
      {x: 640, y: 620},
      {x: 30, y: 280},
      {x: 500, y: 150},
      {x: 330, y: 330},
      {x: 600, y: 450},
      {x: 1050, y: 0},
      {x: 940, y: 280},
      {x: 500, y: 720},
      {x: 900, y: 530},
      {x: 1050, y: 690},
      {x: 1120, y: 180},
      {x: 120, y: 960},
      {x: 320, y: 870},
      {x: 620, y: 930},
      {x: 850, y: 900},
      {x: 20, y: 610},
      {x: 150, y: 820},
      {x: 160, y: 450},
      {x: 240, y: 650},
      {x: 750, y: 560},
      {x: 720, y: 750},
      {x: 890, y: 700},
      {x: 1060, y: 850},
    ];

    this.init();
  }

  init() {

    for (let i = 0; i < this.circles.length; i++) {
      this.balls.push(
        new Ball(
          this.circles[i],
          this.ballsOptions[i].x,
          this.ballsOptions[i].y,
        )
      );
    };

    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.js-group')) {
        this.groupHandler(e.target.closest('.js-group'));
      } else if (e.target.closest('.js-circle')) {
        this.moveBalls(e.target.closest('.js-circle'));
      }
    })

    // window.addEventListener('resize', this.resize.bind(this))
  }

  groupHandler (target) {
    const groupName = target.dataset.group;
    const group = this.container.getElementsByClassName(`js-${  groupName}`);
    
    if(target.classList.contains('is-opened')) {
      gsap.to(group, {
        scale: 0,
      })
    } else {
      gsap.to(group, {
        scale: 1,
      });
    }
  
    target.classList.toggle('is-opened');
  }

  moveBalls(target) {

    if(target === this.currentBall.ball) {
      this.balls.forEach( ball => {
        if(ball.ball === target) {
          ball.hide();
          this.currentBall = {ball: null};
          return;
        }
  
        ball.setPosition(ball.originalX, ball.originalY)
        ball.move();
      });
    } else {
      if (this.currentBall.ball !== null) {
        this.currentBall.hide();
        this.currentBall = {ball: null};

        this.balls.forEach( ball => {
          ball.setPosition(ball.originalX, ball.originalY)
          ball.move();
        });
      }

      const left = gsap.getProperty(target, "x");
      const top = gsap.getProperty(target, "y");
      const width = gsap.getProperty(target, "width");

      this.balls.forEach( ball => {
        if(ball.ball === target) {
          this.currentBall = ball;
          ball.show();
          return;
        }

        ball.think(left, top, width);
        ball.move();
      });
    }
  }

  // resize() {
  //   this.ballsOptions.forEach( (option, index) => {
  //     if(option.x + this.balls[index].ball.clientWidth > window.innerWidth) {
  //       this.balls[index].setPosition(window.innerWidth - this.balls[index].ball.clientWidth);
  //       this.balls[index].move()
  //     }
  //   });
  //   console.log(this.container)
  // }

}

const container = document.querySelector('.team');
const animationControls = new Animation(container);
sayHello();