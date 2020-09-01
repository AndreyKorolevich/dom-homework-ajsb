const goblin = document.createElement('div');
goblin.classList.add('goblin');
const positions = [
  ['00', '01', '02', '03'],
  ['10', '11', '12', '13'],
  ['20', '21', '22', '23'],
  ['30', '31', '32', '33'],
];
let previousCell = null;
const randomPosition = () => {
  const row = Math.round(Math.random() * 3);
  const col = Math.round(Math.random() * 3);
  let cell = positions[row][col];
  if (cell === previousCell) {
    cell = randomPosition();
  }
  previousCell = cell;
  return cell;
};

setInterval(() => {
  const pos = randomPosition();
  document.getElementById(pos).insertAdjacentElement('afterbegin', goblin);
}, 600);
