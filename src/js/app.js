/* eslint-disable no-plusplus */
import GameState from './GameState';

const gameState = new GameState({
  currentPosition: -1,
  Score: 0,
  LeftToLose: 5,
});

/*
* Показ текущего состояния игры на экране
*/
function DisplayGameState() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const GameStatus = (gameState.LeftToLose > 0) ? 'Play' : 'You lost';
    const stateboard = document.getElementById('stateboard');
    stateboard.innerHTML = '<table>'
      + `<tr><td class="disp disp1">Game Status</td><td class="disp disp2">${GameStatus}</td></tr>`
      + `<tr><td class="disp disp1">Game Score</td><td class="disp disp2">${gameState.Score}</td></tr>`
      + `<tr><td class="disp disp1">Attemps to lose</td><td class="disp disp2">${gameState.LeftToLose}</td></tr>`
      + '</table>';
    setTimeout(() => resolve(true), 100);
  });
}

/*
* Основная логика игры; Выполняется раз в секунду
*/
async function runGoblin() {
  let currentPos = -1;
  while (currentPos === gameState.currentPosition || currentPos === -1) {
    currentPos = Math.round(Math.random() * 15);
  }
  const gamePad = document.getElementById('gamePad');
  const goblin = document.getElementById('goblin');
  const newPlace = gamePad.childNodes[currentPos];
  newPlace.appendChild(goblin);
  goblin.classList.remove('invisible');
  gameState.currentPosition = currentPos;
  if (gameState.currentClick === 0) {
    gameState.doLoseOne();
  }
  gameState.clearCurrentClick();
  await DisplayGameState();
  if (gameState.LeftToLose <= 0) {
    clearInterval(gameState.StoreInterval);
    // eslint-disable-next-line no-alert
    alert('You lost the game! Refresh screen for start');
  }
}

/*
* Зачет клика
*/
document.getElementById('goblin').addEventListener('click', () => {
  gameState.doClick();
});

/*
* Старт игры
*/
document.addEventListener('DOMContentLoaded', () => {
  const gamePad = document.getElementById('gamePad');
  let htmlVar = '';
  for (let y = 0; y < 16; y++) {
    htmlVar += '<div class="myCell"></div>';
  }
  gamePad.innerHTML = htmlVar;
  const interval = setInterval(() => { runGoblin(); }, 1000);
  DisplayGameState();
  gameState.storeInterval(interval);
  // eslint-disable-next-line no-console
  console.log('Game started!');
});
