export default class GameState {
  constructor(obj) {
    this.currentPosition = obj.currentPosition;
    this.Score = obj.Score;
    this.LeftToLose = obj.LeftToLose;
    this.currentClick = 0;
    this.StoreInterval = {};
  }

  doClick() {
    this.Score += 1;
    this.currentClick = 1;
  }

  clearCurrentClick() {
    this.currentClick = 0;
  }

  doLoseOne() {
    this.LeftToLose -= 1;
  }

  storeInterval(interval) {
    this.StoreInterval = interval;
  }
}
