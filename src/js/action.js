export default class Action {
  constructor(gameBlock, game, panel) {
    this.gameBlock = gameBlock;
    this.panel = panel;
    this.game = game;
    this.blockingClicks = true;
    this.reset = document.querySelector('.cross');
    this.clickGameBlock = this.clickGameBlock.bind(this);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    this.gameBlock.addEventListener('click', this.clickGameBlock);
    this.panel.button.addEventListener('click', this.startGame);
    this.reset.addEventListener('click', this.newGame);
  }

  clickGameBlock(e) {
    if (this.blockingClicks) return;
    const el = e.target;
    if (el.classList.contains('img')) {
      this.game.delActionImage();
      this.panel.addedScore();
    } else {
      this.panel.addedMisses();
      const stop = this.panel.gameOver();
      if (stop) {
        this.game.delInterval();
        this.game.cell.classList.remove('img');
        document.querySelector('.finish').style.display = 'block';
        this.blockingClicks = true;
        this.gameBlock.style.cursor = 'default';
      }
    }
  }

  startGame() {
    this.panel.button.hidden = true;
    this.blockingClicks = false;
    this.gameBlock.style.cursor = '';
    this.panel.newScore();
    this.panel.newMisses();
    this.game.insertRandomCell();
  }

  newGame() {
    document.querySelector('.finish').style.display = 'none';
    this.panel.button.hidden = false;
  }
}
