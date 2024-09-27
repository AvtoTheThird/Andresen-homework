Array.prototype.myFilter = function (callback, context) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  let filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};
