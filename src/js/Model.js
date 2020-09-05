export default class gameModel {
  constructor() {
    this.positions = [
      ['00', '01', '02', '03'],
      ['10', '11', '12', '13'],
      ['20', '21', '22', '23'],
      ['30', '31', '32', '33'],
    ];
  }

  getPositions() {
    return this.positions;
  }
}
