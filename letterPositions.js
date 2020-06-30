const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

// old test. import assertArraysEqual to reuse
// console.log(letterPositions('hello'));
// assertArraysEqual(letterPositions('hello')['h'], [0]);
// assertArraysEqual(letterPositions('hello')['e'], [1]);
// assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
// assertArraysEqual(letterPositions('hello')['o'], [4]);