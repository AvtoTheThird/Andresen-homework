const myIterable = {
  from: 1,
  to: 4,

  *[Symbol.iterator]() {
    if (this.from > this.to) {
      throw new Error('"from" cant be bigger than "to"');
    }

    if (typeof this.from !== 'number' || typeof this.to !== 'number') {
      throw new TypeError('passed elements must be numbers');
    }

    let ans = [];

    for (let i = this.from; i <= this.to; i++) {
      ans.push(i);
    }
    yield ans;
  },
};
