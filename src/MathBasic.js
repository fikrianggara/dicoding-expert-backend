const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }
    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi add hanya menerima parameter bertipe number');
    }
    return a + b;
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }
    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi add hanya menerima parameter bertipe number');
    }
    return a - b;
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }
    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi add hanya menerima parameter bertipe number');
    }
    return a * b;
  },
  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }
    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi add hanya menerima parameter bertipe number');
    }
    return a / b;
  },
};

module.exports = MathBasic;
