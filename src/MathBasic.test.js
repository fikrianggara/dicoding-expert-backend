const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('An add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when not given parameter of type bumber', () => {
      expect(() => MathBasic.add('a', 'b')).toThrowError();
      expect(() => MathBasic.add('a', 3)).toThrowError();
      expect(() => MathBasic.add(1, [])).toThrowError();
      expect(() => MathBasic.add({}, () => {})).toThrowError();
    });

    it('should return a+b when given two parameters', () => {
      expect(MathBasic.add(1, 2)).toEqual(3);
      expect(MathBasic.add(3, 5)).toEqual(8);
      expect(MathBasic.add(7, 5)).toEqual(12);
      expect(MathBasic.add(12, 20)).toEqual(32);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when not given parameter of type bumber', () => {
      expect(() => MathBasic.subtract('a', 'b')).toThrowError();
      expect(() => MathBasic.subtract('a', 3)).toThrowError();
      expect(() => MathBasic.subtract(1, [])).toThrowError();
      expect(() => MathBasic.subtract({}, () => {})).toThrowError();
    });

    it('should return a-b when given two parameters', () => {
      expect(MathBasic.subtract(1, 2)).toEqual(-1);
      expect(MathBasic.subtract(3, 5)).toEqual(-2);
      expect(MathBasic.subtract(7, 5)).toEqual(2);
      expect(MathBasic.subtract(12, 20)).toEqual(-8);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when not given parameter of type bumber', () => {
      expect(() => MathBasic.multiply('a', 'b')).toThrowError();
      expect(() => MathBasic.multiply('a', 3)).toThrowError();
      expect(() => MathBasic.multiply(1, [])).toThrowError();
      expect(() => MathBasic.multiply({}, () => {})).toThrowError();
    });

    it('should return a*b when given two parameters', () => {
      expect(MathBasic.multiply(1, 2)).toEqual(2);
      expect(MathBasic.multiply(3, 5)).toEqual(15);
      expect(MathBasic.multiply(7, 5)).toEqual(35);
      expect(MathBasic.multiply(12, 20)).toEqual(240);
    });
  });

  describe('A division function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when not given parameter of type bumber', () => {
      expect(() => MathBasic.divide('a', 'b')).toThrowError();
      expect(() => MathBasic.divide('a', 3)).toThrowError();
      expect(() => MathBasic.divide(1, [])).toThrowError();
      expect(() => MathBasic.divide({}, () => {})).toThrowError();
    });

    it('should return a/b when given two parameters', () => {
      expect(MathBasic.divide(1, 2)).toEqual(0.5);
      expect(MathBasic.divide(3, 6)).toEqual(0.5);
      expect(MathBasic.divide(20, 10)).toEqual(2);
      expect(MathBasic.divide(50, 2)).toEqual(25);
    });
  });
});
