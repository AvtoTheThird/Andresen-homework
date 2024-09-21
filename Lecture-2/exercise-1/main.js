Array.prototype.myFilter = function (callback, context = this) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }

  if (!Array.isArray(this)) {
    throw new TypeError(this + "is not an array");
  }

  let filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.bind(context)(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};
