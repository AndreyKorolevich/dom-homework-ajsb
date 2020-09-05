export default class gameView {
  constructor() {
    this.board = document.createElement('div');
    this.goblin = document.createElement('div');

    this.board.id = 'board';
    this.goblin.classList.add('goblin');
  }

  getBoard() {
    this.board.innerHTML = ` <table>
       <tr>
        <td id="00"></td>
        <td id="01"></td>
        <td id="02"></td>
        <td id="03"></td>
       </tr>
       <tr>
        <td id="10"></td>
        <td id="11"></td>
        <td id="12"></td>
        <td id="13"></td>
       </tr>
       <tr>
        <td id="20"></td>
        <td id="21"></td>
        <td id="22"></td>
        <td id="23"></td>
       </tr>
       <tr>
        <td id="30"></td>
        <td id="31"></td>
        <td id="32"></td>
        <td id="33"></td>
       </tr>
      </table>`;
    document.body.insertAdjacentElement('beforeend', this.board);
  }

  showGoblin(elem) {
    return elem.insertAdjacentElement('afterbegin', this.goblin);
  }
  /* eslint-disable */
  findPosition(pos) {
    return document.getElementById(pos);
  }

  addListener(callback) {
    this.goblin.addEventListener('click', callback);
  }

  showPoints(points) {
    document.querySelector('.points').textContent = points;
  }

  showMiss(miss) {
    document.querySelector('.miss').textContent = miss;
  }

  hiddenGoblin() {
    document.querySelector('.goblin').remove();
  }
}
