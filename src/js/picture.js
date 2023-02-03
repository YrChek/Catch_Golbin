export default class Picture {
  constructor(gameСells) {
    this.gameСells = gameСells;
    this.insertRandomCell = this.insertRandomCell.bind(this);
    this.delActionImage = this.delActionImage.bind(this);
    this.delInterval = this.delInterval.bind(this);
  }

  insertRandomCell() {
    this.timer = setInterval(() => {
      const random = Math.floor(Math.random() * this.gameСells.length);
      this.cell = this.gameСells[random];
      this.cell.classList.add('img');
      setTimeout(() => this.cell.classList.remove('img'), 1000);
    }, 1500);
  }

  delActionImage() {
    this.cell.style.backgroundColor = 'red';
    setTimeout(() => {
      this.cell.classList.remove('img');
      this.cell.style.backgroundColor = '';
    }, 100);
  }

  delInterval() {
    clearInterval(this.timer);
  }
}
