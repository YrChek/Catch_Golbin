export default class Image {
  constructor(imageName, gameСells) {
    this.imageName = imageName;
    this.gameСells = gameСells;
    this.class = this.imageName.slice(0, -4);
    this.addImage = this.addImage.bind(this);
    this.delImage = this.delImage.bind(this);
    this.insertRandomCell = this.insertRandomCell.bind(this);
    this.delActionImage = this.delActionImage.bind(this);
    this.delInterval = this.delInterval.bind(this);
  }

  addImage(elment) {
    const img = `<img class="${this.class}" src="/src/image/${this.imageName}" alt="picture goblin"></img>`;
    elment.insertAdjacentHTML('afterbegin', img);
  }

  delImage(parentEl) {
    const img = parentEl.querySelector(`.${this.class}`);
    if (img) img.remove();
  }

  insertRandomCell() {
    this.timer = setInterval(() => {
      const random = Math.floor(Math.random() * this.gameСells.length);
      this.cell = this.gameСells[random];
      this.addImage(this.cell);
      setTimeout(() => this.delImage(this.cell), 1000);
    }, 1500);
  }

  delActionImage() {
    const img = this.cell.querySelector(`.${this.class}`);
    if (img) {
      this.cell.style.backgroundColor = 'red';
      setTimeout(() => {
        img.remove();
        this.cell.style.backgroundColor = '';
      }, 100);
    }
  }

  delInterval() {
    clearInterval(this.timer);
  }
}
