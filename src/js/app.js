import gsap from 'gsap';
import sayHello from './lib/sayHello';
import Ball from './ball';

class Animation {
  constructor(container) {
    this.container = container;
    this.circles = this.container.getElementsByClassName('js-circle');
    this.group = this.container.getElementsByClassName('js-group');
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

    this.showBalls();

    this.container.addEventListener('click', this.defineClick.bind(this));
    // window.addEventListener('resize', this.resize.bind(this));
  }

  showBalls() {
    gsap.from(this.group, {
      y: "+=50",
      opacity: 0,
      
      ease: 'elastic.out(1, 0.4)',
      stagger: {
        from: 'random',
        amount: this.group.length / 10,
      },
      duration: Math.max(this.group.length / 10, 1)
    })
  }

  defineClick(e) {
    if (e.target.closest('.js-group')) {
      this.groupHandler(e.target.closest('.js-group'));
    } else if (e.target.closest('.js-circle')) {
      this.defineCurrentBall(e.target.closest('.js-circle'));
    }
  }

  groupHandler (target) {
    const groupName = target.dataset.group;
    this.group = this.container.getElementsByClassName(`js-${  groupName}`);
    
    if(target.classList.contains('is-opened')) {
      gsap.to(this.group,{
        opacity: 0,
        display: 'none',
        duration: 0.5
      });

      // this.hideBalls()
    } else {
      gsap.to(this.group,{
        display: 'block',
        opacity: 1,
        duration: 0
      });

      this.showBalls();
    }
  
    target.classList.toggle('is-opened');
  }

  defineCurrentBall(target) {
    if(target === this.currentBall.ball) {
      this.unsetBallsPosition();
      this.currentBall = {ball: null}
    } else {
      if (this.currentBall.ball !== null) {
        this.unsetBallsPosition();
      }

      setTimeout(this.openUpBalls.bind(this, target), 100)
    }
  }

  unsetBallsPosition() {
    this.balls.forEach( ball => {
      if(ball === this.currentBall) {
        ball.hide();
      }

      ball.setPosition(ball.originalX, ball.originalY);
      ball.move();
    });
  }

  openUpBalls(target) {
    let left;
    let top;

    this.balls.forEach( ball => {
      if(ball.ball === target) {
        this.currentBall = ball;

        ball.show();
        left = ball.x;
        top = ball.y;
      }
    });

    this.balls.forEach( ball => {
      if(ball.ball === target) {
        return
      }

      ball.think(left, top);
      ball.move();
    });
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