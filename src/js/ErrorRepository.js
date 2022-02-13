export class ErrorRepository {
    constructor() {
      this.map = new Map([
        ['1', 'Ошибка 1'],
        ['2', 'Ошибка 2']
    ]);
  };
    translate(code) {
    if (this.map.get(code)) {
      return this.map.get(code);
    }
      return 'Unknown error';
    };
  };