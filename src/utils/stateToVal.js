const functions = {
  FindVal(state) {
    switch (state) {
      case 'rock':
        return 0;
      case 'paper':
        return 1;
      case 'scissors':
        return 2;

      default:
        return undefined;
    }
  },
  FindState(val) {
    switch (val) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';

      default:
        return undefined;
    }
  },
};

export default functions;
