class Calculator {
  constructor(x, y) {
    this.validateNumber(x);
    this.validateNumber(y);
    this.x = x;
    this.y = y;
  }

  validateNumber(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error("Invalid number");
    }
  }

  setX(x) {
    this.validateNumber(x);
    this.x = x;
  }

  setY(y) {
    this.validateNumber(y);
    this.y = y;
  }

  logSum = () => {
    return this.x + this.y;
  };

  logMul = () => {
    return this.x * this.y;
  };

  logSub = () => {
    return this.x - this.y;
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error("Division by zero");
    }
    return this.x / this.y;
  };
}
