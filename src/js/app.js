import sayHello from './lib/sayHello';
import Ball from './ball';

const container = document.querySelector('.team');
const circles = container.getElementsByClassName('js-circle');
const ballsOptions = [
  {x: 220, y: 20},
  {x: 20, y: 20},
  {x: 280, y: 80},
  {x: 10, y: 250},
  {x: 600, y: 20},
];
const balls = [];

for (let i = 0; i < circles.length; i++) {
  balls.push(
    new Ball(
      circles[i],
      ballsOptions[i].x,
      ballsOptions[i].y,
    )
  )
};

container.addEventListener('click', (e) => {
  const target = e.target.closest('.js-circle');
  if(!target) {
    return;
  }

  const rect = target.getBoundingClientRect();

  balls.forEach( ball => {
    if(ball.ball === target) {
      return
    }

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    ball.think(x, y, rect.width);
    ball.move();
  })
})

sayHello();