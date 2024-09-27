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

// Test case for myFilter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: Filter even numbers
const evenNumbers = numbers.myFilter(function (num) {
  return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Test 2: Filter numbers greater than 5
const greaterThanFive = numbers.myFilter(function (num) {
  return num > 5;
});
console.log("Numbers greater than 5:", greaterThanFive);

// Test 3: Test with context
const obj = { threshold: 7 };
const greaterThanThreshold = numbers.myFilter(function (num) {
  return num > this.threshold;
}, obj);
console.log("Numbers greater than threshold:", greaterThanThreshold);

// Test 4: Test with non-function callback (should throw TypeError)
try {
  numbers.myFilter("not a function");
} catch (error) {
  console.log("Error caught:", error.message);
}
