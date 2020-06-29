# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sjung/lotide`

**Require it:**

`const _ = require('@sjung/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo)`: checks if 2 arrays are same. Console.log an appropriate message based on whether they are equal.
* `assertEqual(dataOne, dataTwo)`: checks if 2 pieces of data are same. Must be one of javascript's 6 data types. Console.log an appropriate message based on whether they are equal.
* `assertObjectEqual(objectOne, objectTwo)`: checks if 2 objects are same. Console.log an appropriate message based on whether they are equal.
* `countLetters(data)`: checks how many times each character/ number occurs in the input (not including spaces). Returns an object with each letter as keys and the value is the number of times it occured.
* `countOnly(array, data)`: checks how many times the data you inputted (string, number, etc) occurs in the inputted array. Returns a number with how many times it occured.
* `eqArrays(arrayOne, arrayTwo)`: checks if 2 arrays are same. Returns True or False.
* `eqObjects(objectOne, objectTwo)`: checks if 2 objects are same. Returns True or False.
* `findKey(object, callback)`: checks for first value which matches callback criteria. Returns that key.
* `findByKeyValue(object, data)`: checks for first value which matches data we inputted. Returns that key.
* `flatten(array)`: if there are nested arrays in input array, removes all nested arrays and lists elements in that array. Returns array with no nested arrays.
* `head(array)`: inputs an array. returns first element of that array (array[0]).
* `letterPositions(data)`: inputs some data (string, number, etc). returns an object with each character as keys. the value of the keys is an array with each index that character occurs.
* `map(array)`: inputs an array and callback function. returns new array with the callback function applied to each element of the input array
* `middle(array)`: inputs an array. returns array with the middle index element. For arrays with even number of elements, returns array containing middle 2 elements.
* `tail(array)`: inputs an array. returns same array minus first element of that array (array[0]).
* `takeUntil(array, callback)`: inputs an array and callback criteria. returns same array until the element that the callback criteria is met.
* `without(array, data)`: inputs an array and data. Returns array with any elements of the array === inputted data removed.