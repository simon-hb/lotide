const findKeyByValue = function(inputObject, searchValue) {
  for (let key in inputObject) {
    if (inputObject[key] === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;