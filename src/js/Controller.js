export default class Controller {
  constructor(model, view) {
    this.previousCell = null;
    this.positions = model;
    this.view = view;
    this.points = 0;
    this.miss = -1;
    this.isHit = false;
    this.addPoint = this.addPoint.bind(this);
  }

  randomPosition() {
    const row = Math.round(Math.random() * (this.positions.length - 1));
    const col = Math.round(Math.random() * (this.positions.length - 1));
    let cell = this.positions[row][col];
    if (cell === this.previousCell) {
      cell = this.randomPosition();
    }
    this.previousCell = cell;
    return cell;
  }

  addPoint(event) {
    if (event.target.classList.contains('goblin')) {
      this.points += 1;
      this.isHit = true;
      this.view.showPoints(this.points);
      this.view.hiddenGoblin();
    }
  }

  engineGame() {
    const pos = this.randomPosition();
    const posInDOM = this.view.findPosition(pos);
    this.view.showGoblin(posInDOM);
    if (!this.isHit) {
      this.miss += 1;
      this.view.showMiss(this.miss);
      if (this.miss === 5) {
        clearInterval(this.timet);
        alert('Game over');
      }
    } else {
      this.isHit = false;
    }
  }

  generateNewPosition() {
    this.view.getBoard();
    this.view.addListener(this.addPoint);
    this.timet = setInterval(() => { this.engineGame(); }, 1000);
  }
}
