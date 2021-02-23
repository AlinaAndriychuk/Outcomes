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
      {x: 770, y: 270},
      {x: 910, y: 140},
      {x: 1220, y: 320},
      {x: 500, y: 590},
      {x: 1000, y: 570},
      {x: 520, y: 120},
      {x: 700, y: 50},
      {x: 380, y: 220},
      {x: 270, y: 320},
      {x: 80, y: 140},
      {x: 290, y: 70},
      {x: 600, y: 350},
      {x: 800, y: 390},
      {x: 730, y: 710},
      {x: 80, y: 370},
      {x: 550, y: 200},
      {x: 400, y: 400},
      {x: 650, y: 500},
      {x: 1120, y: 70},
      {x: 1010, y: 350},
      {x: 570, y: 790},
      {x: 1200, y: 600},
      {x: 1120, y: 760},
      {x: 1180, y: 440},
      {x: 190, y: 1030},
      {x: 390, y: 940},
      {x: 690, y: 1000},
      {x: 920, y: 970},
      {x: 90, y: 680},
      {x: 220, y: 890},
      {x: 230, y: 520},
      {x: 310, y: 720},
      {x: 820, y: 640},
      {x: 790, y: 820},
      {x: 960, y: 770},
      {x: 1130, y: 950},
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
      Array.from(group).forEach( circle => {
        if (circle.classList.contains('member_big')) {
          gsap.to(circle, {
            scale: 1,
          })
        } else if (circle.classList.contains('member_small')) {
          gsap.to(circle, {
            scale: 0.7,
          })
        } else {
          gsap.to(circle, {
            scale: 0.8,
          })
        }
      })
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