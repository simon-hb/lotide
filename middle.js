const isEven  = function(num) {
  return num % 2 === 0;
};

const middle = function (inputArray) {
  let middleArray = [];
  if (inputArray.length < 3) {
    return middleArray;
  } else if (isEven(inputArray.length)) {
    middleArray.push(inputArray[inputArray.length / 2 - 1]);
    middleArray.push(inputArray[inputArray.length / 2]);
  } else {
    middleArray.push(inputArray[(inputArray.length - 1) / 2]);
  }
  return middleArray;
};

module.exports = middle;