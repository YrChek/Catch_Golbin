export default class Panel {
  constructor(button, missPanel, scorePanel) {
    this.button = button;
    this.missPanel = missPanel;
    this.scorePanel = scorePanel;
    this.score = 0;
    this.misses = 0;
    this.finish = 5;
    this.addedScore = this.addedScore.bind(this);
    this.addedMisses = this.addedMisses.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.newMisses = this.newMisses.bind(this);
    this.newScore = this.newScore.bind(this);
  }

  addedScore() {
    this.score += 1;
    this.scorePanel.textContent = `Баллы: ${this.score}`;
  }

  addedMisses() {
    this.misses += 1;
    this.missPanel.textContent = `Промахи: ${this.misses}`;
  }

  gameOver() {
    if (this.misses < this.finish) return false;
    return true;
  }

  newScore() {
    this.score = 0;
    this.scorePanel.textContent = `Баллы: ${this.score}`;
  }

  newMisses() {
    this.misses = 0;
    this.missPanel.textContent = `Промахи: ${this.misses}`;
  }
}
