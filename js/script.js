let roadBG = document.querySelector('#road');
let mainCar = document.querySelector('#main-car');
let enemyCar = document.querySelector('#enemy');

function moveLeft(){
  leftPos = parseInt(window.getComputedStyle(mainCar).getPropertyValue('left'));
  leftPos -= 95;
  if(leftPos >= 0) mainCar.style.left = leftPos + 'px';
}

function moveRight(){
  leftPos = parseInt(window.getComputedStyle(mainCar).getPropertyValue('left'));
  leftPos += 95;
  if(leftPos < 300) mainCar.style.left = leftPos + 'px';
}

document.addEventListener('keydown', function(event){
  if(event.key == 'ArrowLeft'){
     moveLeft();
  }
  if(event.key == 'ArrowRight'){
     moveRight();
  }
});

document.addEventListener('animationiteration', function(){
  let randomNum = [55, 150, 245];
  randInt = Math.floor(Math.random()*3);
  enemyCar.style.left = randomNum[randInt] + 'px';
});

function collisionDetection(){
  requestAnimationFrame(collisionDetection);
  currentPos = parseInt(window.getComputedStyle(mainCar).getPropertyValue('left'));
  enemyPos = parseInt(window.getComputedStyle(enemyCar).getPropertyValue('left'));

  enemyPosTop = parseInt(window.getComputedStyle(enemyCar).getPropertyValue('top'));

  if(currentPos == enemyPos && enemyPosTop >320){
    roadBG.style.animation = 'none';
    enemyCar.style.animation = 'none';
    enemyCar.style.top = enemyPosTop + 'px';
  }
}
requestAnimationFrame(collisionDetection);

function gameOver(){
  let gameover = document.querySelector('#game-over');
  let restart = document.createElement('button')
  gameover.appendChild(restart);
  restart.innerHTML = 'RESTART';
  gameover.innerHTML = 'GAME OVER';
}