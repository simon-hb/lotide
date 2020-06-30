const flatten = function(arrayElements) {
  let outputArray = [];
  for (let arrayElement of arrayElements) {
    if (Array.isArray(arrayElement) === true) {
      for (let element of arrayElement) {
        outputArray.push(element);
      }
    } else {
      outputArray.push(arrayElement);
    }
  }
  return outputArray;
};

module.exports = flatten;