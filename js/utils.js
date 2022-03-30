const rectangularCollistion = ({ rectangle1, rectangle2 }) => {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

const determineWinner = ({ player, enemy, timerId }) => {
  const finishScreen = document.querySelector('#finishGameScreen');
  const finishMessage = document.querySelector('#finishGameMessage');

  finishScreen.style.display = 'flex';
  clearTimeout(timerId);

  if (player.health === enemy.health) {
    finishMessage.innerHTML = 'Draw!';
  } else if (player.health > enemy.health) {
    finishMessage.innerHTML = 'Samurai Mack Win!';
  } else {
    finishMessage.innerHTML = 'Kenji Win!';
  }
}

const decreaseTimer = () => {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer --;
    document.querySelector('#timer').innerHTML = timer;
  }

  if (timer <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}